import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { UserTab } from "../../components";
import DefaultLayout from "../DefaultLayout";
import {
  getTransactionByUserEmailSelector,
  selectTransactionLoading,
} from "../../store/selectors/transaction.selector";
import { getTransactionByUserEmail } from "../../store/actions/transaction.action";
import { ITransaction } from "../../store/types/transaction.types";
import Helmet from "../../Helmet";

const UserTransactionHistory = () => {
  const { t } = useTranslation();
  const transactions = useSelector(getTransactionByUserEmailSelector);
  const transactionLoading = useSelector(selectTransactionLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const defaultTransaction =
    "https://cdn.dribbble.com/users/1168645/screenshots/3152485/no-orders_2x.png";

  useEffect(() => {
    if (transactionLoading === "success") return;
    dispatch(getTransactionByUserEmail());
  }, []);

  return (
    <DefaultLayout>
      <Helmet
        title={t("Order History")}
        addPostfixTitle
        description={t("ViewAllOrderHis")}
      />
      <UserTab tabIndex={0} />
      <main
        className="max-w-2xl px-4 py-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
        aria-labelledby="transaction-history-heading"
      >
        <div className="max-w-xl">
          <h1
            id="transaction-history-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900"
          >
            {t("TransactionHis")}
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            {t("TransactionHisContent")}
          </p>
        </div>
        {transactions.length > 0 ? (
          <div className="grid grid-cols-4 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
            {transactions &&
              transactions.map((transaction: ITransaction) => (
                <div className="grid grid-cols-1">
                  <div
                    key={transaction._id}
                    aria-hidden="true"
                    className="relative cursor-pointer group"
                    onClick={() => navigate(`/transaction/${transaction._id}`)}
                  >
                    <div className="overflow-hidden bg-[#E5E7EB] rounded-md aspect-w-1 aspect-h-1 group-hover:opacity-75">
                      <img
                        src=""
                        alt="product"
                        className="object-cover object-center"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-[#6B7280]">
                      <span className="absolute inset-0" />
                      {transaction.productId.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium">
                      {transaction.status === "shipped" ? (
                        <div className="text-[#111827]">
                          Returned on
                          <span>
                            {" "}
                            {dayjs(transaction.to).format("DD/MM/YYYY")}{" "}
                          </span>
                        </div>
                      ) : transaction.status === "pending" ? (
                        <span className="text-[#4F46E5]">
                          Waiting for shipping
                        </span>
                      ) : transaction.status === "paid" ? (
                        <span className="text-[#14B8A6]">Paid</span>
                      ) : null}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          <div className="flex justify-center text-5xl font-bold text-center">
            <div className="mb-10">
              <img
                src={defaultTransaction}
                alt="transaction"
                className="w-100 h-100"
              />
              <h1 className=" text-[#6b7280]">No orders available</h1>
            </div>
          </div>
        )}
      </main>
    </DefaultLayout>
  );
};

export default UserTransactionHistory;
