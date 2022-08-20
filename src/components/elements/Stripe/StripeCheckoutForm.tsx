import React, { FormEvent, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { toast } from "react-toastify";
import "./Stripe.css";
import { customAxios } from "../../../http-common";

const StripeCheckoutForm = ({transactionData}:any) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret",
    );

    if (!clientSecret) {
      return;
    }

    stripe
      .retrievePaymentIntent(clientSecret)
      .then(({ paymentIntent }: any) => {
        switch (paymentIntent.status) {
          case "succeeded":
            toast.success("Payment succeeded!", {
              theme: "dark",
            });
            break;
          case "processing":
            toast.warning("Your payment is processing.", {
              theme: "dark",
            });
            break;
          case "requires_payment_method":
            toast.warning(
              "Your payment was not successful, please try again.",
              {
                theme: "dark",
              },
            );
            break;
          default:
            toast.error("Something went wrong.", {
              theme: "dark",
            });
            break;
        }
      });
  }, [stripe]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!stripe || !elements) {
      toast.warning(
        "Still loading. Please wait a few seconds and then try again.",
        {
          theme: "dark",
        },
      );
      return;
    }

    setIsLoading(true);
    //@ts-ignore
    const { error: stripeError } = await stripe
      .confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          return_url: "http://localhost:3000/checkout/complete",
        },
      })
      .then(async function () {
        const res = await customAxios("application/json")
          .post("transaction/create-transaction", transactionData);
        return console.log("res.status :>> ", res.status);
      });
    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (
      stripeError.type === "card_error" ||
      stripeError.type === "validation_error"
    ) {
      toast.error(`${stripeError.message}`, {
        theme: "dark",
      });
    } else {
      toast.error("An unexpected error occurred.", {
        theme: "dark",
      });
    }

    setIsLoading(false);
  };

  return (
    <form id="payment-form" className="stripe-form" onSubmit={handleSubmit}>
      <PaymentElement id="payment-element" />
      <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className="pay-button"
      >
        <span id="button-text">
          {isLoading ? <div className="spinner" id="spinner" /> : "Pay now"}
        </span>
      </button>
    </form>
  );
};

export default StripeCheckoutForm;
