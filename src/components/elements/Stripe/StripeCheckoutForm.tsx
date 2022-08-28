import React, { FormEvent, useEffect, useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import { toast } from "react-toastify";
import "./Stripe.css";
import { customAxios } from "../../../http-common";
import {useSelector} from "react-redux";
import {getProductByIDSelector} from "../../../store/selectors/product.selector";
import qs from "qs";
import {getCurrentUserSelector} from "../../../store/selectors/user.selector";

const StripeCheckoutForm = ({transactionData}: any) => {
  const stripe = useStripe();
  const elements = useElements();
  const user = useSelector(getCurrentUserSelector);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
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
              }
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
    const intent = localStorage.getItem('currentPi');
    await customAxios().post(
        "transaction/create-transaction",
        qs.stringify({...transactionData, productId: transactionData.productId._id,
          intent, userEmail: user.email})
    );

    if (!stripe || !elements) {
      toast.warning(
        "Still loading. Please wait a few seconds and then try again.",
        {
          theme: "dark",
        }
      );
      return;
    }

    setIsLoading(true);
    // @ts-ignore
    const response = stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "http://localhost:3000/payment-success",
      },
    });
    // // This point will only be reached if there is an immediate error when
    // // confirming the payment. Otherwise, your customer will be redirected to
    // // your `return_url`. For some payment methods like iDEAL, your customer will
    // // be redirected to an intermediate site first to authorize the payment, then
    // // redirected to the `return_url`.
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
