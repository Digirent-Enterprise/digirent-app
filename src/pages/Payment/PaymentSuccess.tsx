import { useEffect, useState } from "react";
import { customAxios } from "../../http-common";
import qs from "qs";
import {toast} from "react-toastify";

const PaymentSuccess = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const payment_intent = queryParams.get("payment_intent");
  const payment_intent_client_secret = queryParams.get(
    "payment_intent_client_secret"
  );
  const [newTrans, setNewTrans] = useState({});
  const [intent, setIntent] = useState({});

  const _updateTransactionStatus = async () => {
    await customAxios().put('transaction/update-transaction', qs.stringify({
      status: 'paid',
      intent: payment_intent_client_secret,
    }))
  }

  const _fetchTransaction = async () => {
   return  await  customAxios().get('transaction/get-transaction-by-intent', {
      params: {
        intent: payment_intent_client_secret
      }
    })
  }


  const _fetchIntent = async () => {
    const response = await customAxios().get("payment-intent", {
      params: { payment_intent },
    });
    if (response && response.data) {
      setIntent(response.data);
      if (response.data.charges.data[0].paid){
        await _updateTransactionStatus()
        toast.success('You have paid your order.')
        const newTransState = await _fetchTransaction();
        if (newTransState && newTransState.data){
          setNewTrans(newTransState.data);
        }
      }
    }
  };

  useEffect(() => {
    _fetchIntent();
  }, []);
  return newTrans ? <div> {JSON.stringify(newTrans)} </div>  :<> </>;
};
export default PaymentSuccess;
