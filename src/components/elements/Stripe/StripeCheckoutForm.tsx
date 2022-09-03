import React, { FormEvent, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { toast } from "react-toastify";
import qs from "qs";
import "./Stripe.css";
import { useSelector } from "react-redux";
import qs from "qs";
import { customAxios } from "../../../http-common";
import { getCurrentUserSelector } from "../../../store/selectors/user.selector";

const StripeCheckoutForm = ({ transactionData }: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector(getCurrentUserSelector);
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
    const intent = localStorage.getItem("currentPi");
    await customAxios().post(
      "transaction/create-transaction",
      qs.stringify({
        ...transactionData,
        productId: transactionData.productId._id,
        intent,
        userEmail: user.email,
      }),
    );

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
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const response = stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success",
      },
    });
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
