import { StripePayment } from "../../elements";

const OrderSummaryContent = ({ transactionData, productDataById }: any) => {
  console.log("transactionData :>> ", transactionData);
  return (
    <div className="container flex flex-col grow">
      <h5 className="pb-4 text-2xl">Order Summary</h5>
      <div className="flex flex-col w-full px-0 shrink">
        <div className="flex flex-col">
          <div className="md:pt-0 2xl:ps-4">
            <div className="flex flex-col space-y-4">
              <div className="flex flex-col">
                <p className="text-xl">Product</p>
                <div className="flex flex-row justify-between">
                  <div className="text-md justify-left">
                    {productDataById.name}
                  </div>
                  <span className="text-red-600">
                    $ {transactionData.totalPrice}
                  </span>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <p className="text-xl">Date</p>
                <div className="flex flex-row justify-between">
                  <div className="text-md justify-right">
                    {transactionData.from.toString().slice(4, 15)} -{" "}
                    {transactionData.to.toString().slice(4, 15)}
                  </div>
                  <div />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray">Payment Method</h2>
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
