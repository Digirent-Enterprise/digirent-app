import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { StripePayment } from "../../elements";

const OrderSummaryContent = ({ transactionData }: any) => {
  const { t } = useTranslation();
  return (
    <div className="container flex flex-col grow">
      <h5 className="pb-4 text-2xl">{t("OrderSummary")}</h5>
      <div className="flex flex-col w-full px-0 shrink">
        <div className="flex flex-col">
          <div className="md:pt-0 2xl:ps-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <p className="text-xl">{t("Product")}</p>
                <div className="flex flex-row justify-between">
                  <div className="text-md justify-left">
                    {transactionData.productId.name}
                  </div>
                  <span className="text-red-600">
                    $ {transactionData.rentalCost}
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-xl">{t("Date")}</p>
                <div className="flex flex-row justify-between">
                  <div className="text-md justify-right">
                    {dayjs(transactionData.from).format("DD/MM/YYYY")} -{" "}
                    {dayjs(transactionData.to).format("DD/MM/YYYY")}
                  </div>
                  <div />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray">
                  {t("PaymentMethod")}
                </h2>
              </div>
              <StripePayment transactionData={transactionData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryContent;
