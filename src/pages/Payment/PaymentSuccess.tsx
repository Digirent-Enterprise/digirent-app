/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import qs from "qs";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { ITransaction } from "../../store/types/transaction.types";
import { customAxios } from "../../http-common";

const PaymentSuccess = () => {
  const { t } = useTranslation();
  const queryParams = new URLSearchParams(window.location.search);
  const payment_intent = queryParams.get("payment_intent");
  const paymentIntentClientSecret = queryParams.get(
    "payment_intent_client_secret",
  );
  const [newTrans, setNewTrans] = useState<ITransaction>();
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
      params: { payment_intent },
    });
    if (response && response.data) {
      setIntent(response.data);
      if (response.data.charges.data[0].paid) {
        await updateTransactionStatus();
        toast.success("You have paid your order.");
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

  const rentDays =
    newTrans && newTrans.to && newTrans.from
      ? (new Date(newTrans?.to).getTime() -
          new Date(newTrans?.from).getTime()) /
        (1000 * 3600 * 24)
      : "";
  return newTrans && newTrans.from && newTrans.to ? (
    <main className="relative lg:min-h-full lg:ml-32">
      <div className="h-80 overflow-hidden lg:absolute lg:w-1/2 lg:h-full lg:pr-4 xl:pr-12">
        <img
          src="https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
          className="h-full w-full object-center object-cover"
          alt="checkout"
        />
      </div>

      <div>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:py-32 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:gap-x-24">
          <div className="lg:col-start-2">
            <h1 className="text-sm font-medium text-blue-100">
              {t("PaymentScss")}
            </h1>
            <p className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {t("Thanks4Order")}
            </p>
            <p className="mt-2 text-base text-gray-500">{t("ThanksContent")}</p>

            <dl className="mt-16 text-sm font-medium">
              <dt className="text-gray-900">{t("TrackingNum")}</dt>
              <dd className="mt-2 text-blue-100">{newTrans._id}</dd>
            </dl>

            <ul className="mt-6 text-sm font-medium text-gray-500 border-t border-gray-200 divide-y divide-gray-200">
              <li key={newTrans._id} className="flex py-6 space-x-6">
                <img
                  src={newTrans.productId.images[0]}
                  alt="checkout-transaction"
                  className="flex-none w-24 h-24 bg-gray-100 rounded-md object-center object-cover"
                />
                <div className="flex-auto space-y-1">
                  <h3 className="text-gray">
                    <a href={`product/${newTrans.productId._id}`}>
                      {newTrans.productId.name}
                    </a>
                  </h3>
                  <p>{newTrans.productId.category}</p>
                  <p>{newTrans.productId.brand}</p>
                </div>
                <div className="flex flex-row font-medium text-gray">
                  <div>{newTrans.productId.rentalCost} x&nbsp;</div>{" "}
                  <p>{rentDays === 0 ? 1 : rentDays} day(s)</p>
                </div>
              </li>
            </ul>

            <dl className="text-sm font-medium text-gray-500 space-y-6 border-t border-gray-200 pt-6">
              <div className="flex justify-between">
                <dt>{t("Subtotal")}</dt>
                <dd className="text-gray-900">
                  {newTrans.currency}
                  {newTrans.rentalCost}
                </dd>
              </div>

              <div className="flex items-center justify-between border-t border-gray-200 text-gray-900 pt-6">
                <dt className="text-base">{t("Total")}</dt>
                <dd className="text-base">
                  {" "}
                  {newTrans.currency}
                  {newTrans.rentalCost}
                </dd>
              </div>
            </dl>

            <dl className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
              <div>
                <dt className="font-medium text-gray-900">{t("PickAt")}</dt>
                <dd className="mt-2">
                  <address className="not-italic">
                    <span className="block">Digirent Ltd.</span>
                    <span className="block">1000 Nguyen Van Linh St.</span>
                    <span className="block">District 7, HCMC</span>
                    <span className="flex flex-row">
                      <div>{t("Before")}</div>
                      <b>&nbsp;{newTrans.from.toString()}</b>
                    </span>
                  </address>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">
                  {t("PaymentInfo")}
                </dt>
                <dd className="mt-2 space-y-2 sm:flex sm:space-y-0 sm:space-x-4">
                  <div className="flex-none">
                    <svg
                      aria-hidden="true"
                      width={36}
                      height={24}
                      viewBox="0 0 36 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-auto"
                    >
                      <rect width={36} height={24} rx={4} fill="#224DBA" />
                      <path
                        d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                        fill="#fff"
                      />
                    </svg>
                    <p className="sr-only">Visa</p>
                  </div>
                  <div className="flex-auto">
                    {/* <p className="text-gray-900">Ending with 4242</p>
                        <p>Expires 12 / 21</p> */}
                  </div>
                </dd>
              </div>
            </dl>

            <div className="mt-16 border-t border-gray-200 py-6 text-right">
              <a
                href="/"
                className="text-sm font-medium text-blue-100 hover:text-indigo-500"
              >
                {t("ContinueShopping")}
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) : null;
};
export default PaymentSuccess;
