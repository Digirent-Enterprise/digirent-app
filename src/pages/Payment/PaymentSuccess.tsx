/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import qs from "qs";
import { toast } from "react-toastify";
import { customAxios } from "../../http-common";

const PaymentSuccess = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const paymentIntent = queryParams.get("payment_intent");
  const paymentIntentClientSecret = queryParams.get(
    "payment_intent_client_secret",
  );
  const [newTrans, setNewTrans] = useState({});
  const [intent, setIntent] = useState({});

  const updateTransactionStatus = async () => {
    await customAxios().put(
      "transaction/update-transaction",
      qs.stringify({
        status: "paid",
        intent: paymentIntentClientSecret,
      }),
    );
  };

  const fetchTransaction = async () => {
    return customAxios().get("transaction/get-transaction-by-intent", {
      params: {
        intent: paymentIntentClientSecret,
      },
    });
  };

  const fetchIntent = async () => {
    const response = await customAxios().get("payment-intent", {
      params: { paymentIntent },
    });
    if (response && response.data) {
      setIntent(response.data);
      if (response.data.charges.data[0].paid) {
        await updateTransactionStatus();
        toast.success("The order has been paid successfully!", {
          theme: "dark",
        });
        const newTransState = await fetchTransaction();
        if (newTransState && newTransState.data) {
          setNewTrans(newTransState.data);
        }
      }
    }
  };

  useEffect(() => {
    fetchIntent();
  }, []);
  return newTrans ? <div> {JSON.stringify(newTrans)} </div> : <> </>;
};
export default PaymentSuccess;
