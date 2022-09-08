import { useSelector, useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineUser,
  AiOutlineTranslation,
} from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useEffect } from "react";
import { getAllProductsSelector } from "../../../store/selectors/product.selector";
import { getAllTransactionsSelector } from "../../../store/selectors/transaction.selector";
import { getAllUsersSelector } from "../../../store/selectors/user.selector";
import { getTransactions } from "../../../store/actions/transaction.action";
import { getUsers } from "../../../store/actions/user.action";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Stat = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const userData = useSelector(getAllUsersSelector);
  const productData = useSelector(getAllProductsSelector);
  const transactionData = useSelector(getAllTransactionsSelector);

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getTransactions());
  }, []);

  const totalUser = userData.length;
  const totalProduct = productData.length;
  const totalTransaction = transactionData.length;

  const stats = [
    {
      id: 1,
      name: "Total Users",
      stat: totalUser,
      icon: AiOutlineUser,
      change: "2",
      changeType: "increase",
      url: "/admin/users",
    },
    {
      id: 2,
      name: "Total Products",
      stat: totalProduct,
      icon: MdProductionQuantityLimits,
      change: "2",
      changeType: "increase",
      url: "/admin/products",
    },
    {
      id: 3,
      name: "Total Transactions",
      stat: totalTransaction,
      icon: AiOutlineTranslation,
      change: "3",
      changeType: "increase",
      url: "/admin/transactions",
    },
  ];

  return (
    <div className="px-8 py-6">
      <h3 className="text-lg leading-6 font-medium text-[#111827]">
        {t("Last30D")}
      </h3>

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
          >
            <dt>
              <div className="absolute bg-[#6366F1] rounded-md p-3">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <p className="ml-16 text-sm font-medium text-[#6B7280] truncate">
                {item.name}
              </p>
            </dt>
            <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
              <p className="text-2xl font-semibold text-[#111827]">
                {item.stat}
              </p>
              <p
                className={classNames(
                  item.changeType === "increase"
                    ? "text-[#22C55E]"
                    : "text-[#EF4444]",
                  "ml-2 flex items-baseline text-sm font-semibold",
                )}
              >
                {item.changeType === "increase" ? (
                  <IconContext.Provider
                    value={{
                      className: "h-5 w-5 self-center flex-shrink-0",
                    }}
                  >
                    <div className=" text-[#22C55E]">
                      <AiOutlineArrowUp aria-hidden="true" />
                    </div>
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider
                    value={{
                      className: "h-5 w-5 self-center flex-shrink-0",
                    }}
                  >
                    <div className=" text-[#EF4444]">
                      <AiOutlineArrowDown aria-hidden="true" />
                    </div>
                  </IconContext.Provider>
                )}

                <span className="sr-only">
                  {item.changeType === "increase" ? "Increased" : "Decreased"}{" "}
                  by
                </span>
                {item.change}
              </p>
              <div className="absolute bottom-0 inset-x-0 bg-[#F9FAFB] px-4 py-4 sm:px-6">
                <div className="text-sm">
                  <a
                    href={item.url}
                    className="font-medium text-[#4F46E5] hover:text-[#6366F1]"
                  >
                    {" "}
                    {t("ViewAll")}
                    <span className="sr-only"> {item.name} stats</span>
                  </a>
                </div>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default Stat;
