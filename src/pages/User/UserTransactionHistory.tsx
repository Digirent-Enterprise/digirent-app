import { UserTab } from "../../components";
import DefaultLayout from "../DefaultLayout";
import {useDispatch, useSelector} from "react-redux";
import {getAllTransactionsSelector, selectTransactionLoading} from "../../store/selectors/transaction.selector";
import {useEffect} from "react";
import {getTransactions} from "../../store/actions/transaction.action";
import {IProduct} from "../../store/types/product.types";
import {useNavigate} from "react-router-dom";

// const orders = [
//   {
//     id: 1,
//     date: "July 12, 2021",
//     datetime: "2021-07-12",
//     status: "out-for-delivery",
//     productName: "Kicks Carrier",
//     href: "#",
//     imageUrl:
//       "https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-01.jpg",
//   },
//   {
//     id: 2,
//     date: "June 21, 2021",
//     datetime: "2021-06-21",
//     status: "delivered",
//     productName: "Micro Backpack",
//     href: "#",
//     imageUrl:
//       "https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-02.jpg",
//   },
//   {
//     id: 3,
//     date: "June 6, 2021",
//     datetime: "2021-06-06",
//     status: "cancelled",
//     productName: "Drawtop Canister",
//     href: "#",
//     imageUrl:
//       "https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-03.jpg",
//   },
//   {
//     id: 4,
//     date: "May 24, 2021",
//     datetime: "2021-05-24",
//     status: "delivered",
//     productName: "High Wall Tote",
//     href: "#",
//     imageUrl:
//       "https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg",
//   },
// ];

const UserTransactionHistory = () => {
  const transactions = useSelector(getAllTransactionsSelector);
  const transactionLoading = useSelector(selectTransactionLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (transactionLoading === 'success') return;
    dispatch(getTransactions());
  }, [])
  return (
    <DefaultLayout>
      <UserTab />
      <main
        className="max-w-2xl px-4 py-24 mx-auto sm:px-6 lg:max-w-7xl lg:px-8"
        aria-labelledby="order-history-heading"
      >
        <div className="max-w-xl">
          <h1
            id="order-history-heading"
            className="text-3xl font-extrabold tracking-tight text-gray-900"
          >
            Transaction history
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Check the status of recent orders, manage returns, and discover
            similar products.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-16 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {transactions && transactions.map((order) => (
            <div key={order._id} className="relative group" onClick={() => navigate(`/transaction/${order._id}`)}>
              <div className="overflow-hidden bg-gray-200 rounded-md aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={(order.productId as IProduct).images[0]}
                  alt="product"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-500">
                  <span className="absolute inset-0" />
                  {(order.productId as IProduct).name}
              </h3>
              <p className="mt-1 text-lg font-medium">
                {order.status === "paid" ? (
                  <div className="text-gray-900">
                    Rental period {" "}
                    <div> From:  {order.from} - To: {order.to} </div>
                  </div>
                ) : order.status === "out-for-delivery" ? (
                  <span className="text-indigo-600">Out for delivery</span>
                ) : order.status === "cancelled" ? (
                  <span className="text-gray-500">Cancelled</span>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </main>
    </DefaultLayout>
  );
};

export default UserTransactionHistory;
