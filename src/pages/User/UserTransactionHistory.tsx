import DefaultLayout from "../DefaultLayout";

const orders = [
  {
    id: 1,
    date: "July 12, 2021",
    datetime: "2021-07-12",
    status: "out-for-delivery",
    productName: "Kicks Carrier",
    href: "#",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-01.jpg",
  },
  {
    id: 2,
    date: "June 21, 2021",
    datetime: "2021-06-21",
    status: "delivered",
    productName: "Micro Backpack",
    href: "#",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-02.jpg",
  },
  {
    id: 3,
    date: "June 6, 2021",
    datetime: "2021-06-06",
    status: "cancelled",
    productName: "Drawtop Canister",
    href: "#",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-03.jpg",
  },
  {
    id: 4,
    date: "May 24, 2021",
    datetime: "2021-05-24",
    status: "delivered",
    productName: "High Wall Tote",
    href: "#",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg",
  },
];

const UserTransactionHistory = () => {
  return (
    <DefaultLayout>
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
          {orders.map((order) => (
            <div key={order.id} className="relative group">
              <div className="overflow-hidden bg-gray-200 rounded-md aspect-w-1 aspect-h-1 group-hover:opacity-75">
                <img
                  src={order.imageUrl}
                  alt="product"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-500">
                <a href="/">
                  <span className="absolute inset-0" />
                  {order.productName}
                </a>
              </h3>
              <p className="mt-1 text-lg font-medium">
                {order.status === "delivered" ? (
                  <span className="text-gray-900">
                    Delivered on{" "}
                    <time dateTime={order.datetime}>{order.date}</time>
                  </span>
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
