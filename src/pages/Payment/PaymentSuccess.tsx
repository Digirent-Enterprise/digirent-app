import { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { useSearchParams } from "react-router-dom";
import { customAxios } from "../../http-common";
import qs from "qs";
import { useSelector } from "react-redux";
import { getTransactionSelector } from "../../store/selectors/transaction.selector";
import { IProduct } from "../../store/types/product.types";

const PaymentSuccess = () => {
  const transaction = useSelector(getTransactionSelector);
  const queryParams = new URLSearchParams(window.location.search);
  const payment_intent = queryParams.get("payment_intent");
  const payment_intent_client_secret = queryParams.get(
    "payment_intent_client_secret"
  );
  const [intent, setIntent] = useState({});

  const _fetchIntent = async () => {
    const response = await customAxios().get("payment-intent", {
      params: { payment_intent },
    });
    if (response && response.data) {
      setIntent(response.data);
      await customAxios().post(
        "transaction/create-transaction",
        qs.stringify({
          productId: "62fbb45d1ca09e6b2c51f95e",
        })
      );
    }
  };

  console.log("selector", transaction);

  useEffect(() => {
    _fetchIntent();
  }, []);
  return <> Hello</>;
};
export default PaymentSuccess;
