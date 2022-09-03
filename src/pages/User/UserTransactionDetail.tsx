import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineArrowLeft } from "react-icons/ai";
import dayjs from "dayjs";
import DefaultLayout from "../DefaultLayout";
import { getCurrentUserSelector } from "../../store/selectors/user.selector";
import { getTransactionByIdSelector } from "../../store/selectors/transaction.selector";
import { getTransactionByID } from "../../store/actions/transaction.action";
import Helmet from "../../Helmet";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const UserTransactionDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const transaction = useSelector(getTransactionByIdSelector);

  const currentUser = useSelector(getCurrentUserSelector);
  useEffect(() => {
    if (id) {
      dispatch(getTransactionByID(id));
    }
  }, []);

  const product = transaction.productId;

  const steps = ["placed", "pending", "paid", "shipped"];

  return (
    <DefaultLayout>
      <Helmet
        title={t("OrderHistory")}
        addPostfixTitle
        description={t("ViewAllOrderHis")}
      />
      {transaction._id && (
        <main className="max-w-2xl pt-8 pb-24 mx-auto sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="pb-4">
            <Link to="/transaction/transaction-history">
              <div className="flex">
                <AiOutlineArrowLeft color="#4169E1" className="mx-2 text-3xl" />
                <p className="mx-2 mb-10 text-lg">{t("ReturnToOrderHis")}</p>
              </div>
            </Link>
          </div>
          <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
            <div className="flex sm:items-baseline sm:space-x-4">
              <h1 className="text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
                {t("Order")} #{transaction._id.substring(0, 10).toUpperCase()}
              </h1>
            </div>
            <p className="text-sm text-[#6B7280]">
              {t("OrderPlaced")}
              <span className="font-medium text-[#111827]">
                {" "}
                {dayjs(transaction.from).format("MMM DD, YYYY")}
              </span>
            </p>
          </div>

          {/* Products */}
          <section aria-labelledby="products-heading" className="mt-6">
            <h2 id="products-heading" className="sr-only">
              {t("ProductPurch")}
            </h2>
            <div className="space-y-8">
              <div className="bg-white border-t border-b border-[#E5E7EB] shadow-sm sm:border sm:rounded-lg">
                <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                  <div className="sm:flex lg:col-span-7">
                    <div className="flex-shrink-0 w-full overflow-hidden rounded-lg aspect-w-1 aspect-h-1 sm:aspect-none sm:w-40 sm:h-40">
                      <img
                        src={product.images[0]}
                        alt="product"
                        className="object-cover object-center w-full h-full sm:w-full sm:h-full"
                      />
                    </div>

                    <div className="mt-6 sm:mt-0 sm:ml-6">
                      <h3 className="text-base font-medium text-[#111827]">
                        <a href={`/product/${product._id}`}>{product.name}</a>
                      </h3>
                      <p className="mt-2 text-sm font-medium text-[#111827]">
                        ${product.rentalCost}
                      </p>
                      <p className="mt-3 text-sm text-[#6B7280]">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:col-span-5">
                    <dl className="grid grid-cols-2 text-sm gap-x-6">
                      <div>
                        <dt className="font-medium text-[#111827]">
                          {t("DeliveryAdd")}
                        </dt>
                        <dd className="mt-3 text-[#6B7280]">
                          <span className="block">{currentUser.location}</span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-[#111827]">
                          {t("ShipUpdt")}
                        </dt>
                        <dd className="mt-3 space-y-3 text-[#6B7280]">
                          <p>{currentUser.email}</p>
                          <p>{currentUser.phone}</p>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </div>

                <div className="px-4 py-6 border-t border-[#E5E7EB] sm:px-6 lg:p-8">
                  <h4 className="sr-only">{t("Status")}</h4>
                  <p className="text-sm font-medium text-[#111827]">
                    {transaction?.status.replace(
                      /^./,
                      transaction?.status[0].toUpperCase(),
                    )}{" "}
                    on{" "}
                    <span>{dayjs(transaction.to).format("MMM DD, YYYY")}</span>
                  </p>
                  <div className="mt-6" aria-hidden="true">
                    <div className="overflow-hidden bg-[#E5E7EB] rounded-full">
                      <div
                        className="h-2 bg-[#4F46E5] rounded-full"
                        style={{
                          width: `calc((
                            ${steps.indexOf(transaction.status)}
                          * 2 + 1) / 7 * 100%)`,
                        }}
                      />
                    </div>
                    <div className="hidden grid-cols-4 mt-6 text-sm font-medium text-[#4B5563] sm:grid">
                      <div className="text-[#4F46E5]">{t("OrderPlaced")}</div>
                      <div
                        className={classNames(
                          steps.indexOf(transaction.status) > 0
                            ? "text-[#4F46E5]"
                            : "",
                          "text-center",
                        )}
                      >
                        {t("Processing")}
                      </div>
                      <div
                        className={classNames(
                          steps.indexOf(transaction.status) > 1
                            ? "text-[#4F46E5]"
                            : "",
                          "text-center",
                        )}
                      >
                        {t("Shipped")}
                      </div>
                      <div
                        className={classNames(
                          steps.indexOf(transaction.status) > 2
                            ? "text-[#4F46E5]"
                            : "",
                          "text-right",
                        )}
                      >
                        {t("Paid")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Billing */}
          <section aria-labelledby="summary-heading" className="mt-16">
            <h2 id="summary-heading" className="sr-only">
              {t("BillingSum")}
            </h2>

            <div className="px-4 py-6 bg-[#F3F4F6] sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
                <div>
                  <dt className="font-medium text-[#111827]">
                    {t("BillingAdd")}
                  </dt>
                  <dd className="mt-3 text-[#6B7280]">
                    <span className="block">{currentUser.location}</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-[#111827]">
                    {t("PaymentInfo")}
                  </dt>
                  <div className="mt-3">
                    <dd className="flex flex-wrap -mt-4 -ml-4">
                      <div className="flex-shrink-0 mt-4 ml-4">
                        <svg
                          aria-hidden="true"
                          width={36}
                          height={24}
                          viewBox="0 0 36 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-auto h-6"
                        >
                          <rect width={36} height={24} rx={4} fill="#224DBA" />
                          <path
                            d="M10.925 15.673H8.874l-1.538-6c-.073-.276-.228-.52-.456-.635A6.575 6.575 0 005 8.403v-.231h3.304c.456 0 .798.347.855.75l.798 4.328 2.05-5.078h1.994l-3.076 7.5zm4.216 0h-1.937L14.8 8.172h1.937l-1.595 7.5zm4.101-5.422c.057-.404.399-.635.798-.635a3.54 3.54 0 011.88.346l.342-1.615A4.808 4.808 0 0020.496 8c-1.88 0-3.248 1.039-3.248 2.481 0 1.097.969 1.673 1.653 2.02.74.346 1.025.577.968.923 0 .519-.57.75-1.139.75a4.795 4.795 0 01-1.994-.462l-.342 1.616a5.48 5.48 0 002.108.404c2.108.057 3.418-.981 3.418-2.539 0-1.962-2.678-2.077-2.678-2.942zm9.457 5.422L27.16 8.172h-1.652a.858.858 0 00-.798.577l-2.848 6.924h1.994l.398-1.096h2.45l.228 1.096h1.766zm-2.905-5.482l.57 2.827h-1.596l1.026-2.827z"
                            fill="#fff"
                          />
                        </svg>
                        <p className="sr-only">Visa</p>
                      </div>
                      <div className="mt-4 ml-4">
                        <p className="text-[#111827]">Ending with 4242</p>
                      </div>
                    </dd>
                  </div>
                </div>
              </dl>

              <dl className="mt-8 text-sm divide-y divide-[#E5E7EB] lg:mt-0 lg:col-span-5">
                <div className="flex items-center justify-between pb-4">
                  <dt className="text-[#4B5563]">{t("Deposit")}</dt>
                  <dd className="font-medium text-[#111827]">
                    ${transaction.deposit}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-[#4B5563]">{t("LatePen")}</dt>
                  <dd className="font-medium text-[#111827]">
                    ${transaction.latePenalty}
                  </dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-[#4B5563]">{t("RentalCost")}</dt>
                  <dd className="font-medium text-[#111827]">
                    ${transaction.rentalCost}
                  </dd>
                </div>
                <div className="flex items-center justify-between pt-4">
                  <dt className="font-medium text-[#111827]">
                    {t("OrderTotal")}
                  </dt>
                  <dd className="font-medium text-[#4F46E5]">
                    $
                    {transaction.deposit +
                      transaction.latePenalty +
                      transaction.rentalCost}
                  </dd>
                </div>
              </dl>
            </div>
          </section>
        </main>
      )}
    </DefaultLayout>
  );
};

export default UserTransactionDetails;
