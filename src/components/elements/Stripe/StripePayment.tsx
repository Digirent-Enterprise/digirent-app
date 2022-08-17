import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
import { stripePromise } from "../../../utils/stripe/stripe";

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default StripePayment;
