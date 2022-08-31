import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckoutForm from "./StripeCheckoutForm";
import { stripePromise } from "../../../utils/stripe/stripe";
import { API_BASE_URL } from "../../../utils/constants/api.constants";
import { customAxios } from "../../../http-common";

const StripePayment = ({ transactionData }: any) => {
  const [clientSecret, setClientSecret] = useState("");
  const transaction = {
    ...transactionData,
    productId: transactionData.productId._id,
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if (transaction.rentalCost) {
      customAxios("application/json")
        .post(`${API_BASE_URL}/create-payment-intent`, { transaction })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          localStorage.setItem("currentPi", res.data.clientSecret);
        });
    }
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <StripeCheckoutForm transactionData={transactionData} />
        </Elements>
      )}
    </div>
  );
};

export default StripePayment;
