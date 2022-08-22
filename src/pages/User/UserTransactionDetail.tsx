import { BackToPreviousPage } from "../../components";
import DefaultLayout from "../DefaultLayout";
import {useEffect, useState} from "react";
import {ITransaction} from "../../store/types/transaction.types";
import {customAxios} from "../../http-common";
import {useParams} from "react-router-dom";
import {IProduct} from "../../store/types/product.types";
import {useSelector} from "react-redux";
import {getUserDetail} from "../../store/actions/user.action";
import {getCurrentUserSelector} from "../../store/selectors/user.selector";

const products = [
  {
    id: 1,
    name: "Nomad Tumbler",
    description:
      "This durable and portable insulated tumbler will keep your beverage at the perfect temperature during your next adventure.",
    href: "#",
    price: "35.00",
    status: "Preparing to ship",
    step: 1,
    date: "March 24, 2021",
    datetime: "2021-03-24",
    address: ["Floyd Miles", "7363 Cynthia Pass", "Toronto, ON N3Y 4H8"],
    email: "f•••@example.com",
    phone: "1•••••••••40",
    imageUrl:
      "https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg",
  },
];
function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}
const UserTransactionDetails = () => {
  const [transaction, setTransaction] = useState<ITransaction>();
  const currentUser = useSelector(getCurrentUserSelector);
  const {id} = useParams();
  useEffect(() => {
    customAxios('').get("transaction/transaction-detail", {params: {id}})
  }, [])

  const product = transaction?.productId as IProduct

  return (
    <DefaultLayout>
      <main className="max-w-2xl pt-8 pb-24 mx-auto sm:pt-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="pb-4">
          <BackToPreviousPage page="order history" />
        </div>
        <div className="px-4 space-y-2 sm:px-0 sm:flex sm:items-baseline sm:justify-between sm:space-y-0">
          <div className="flex sm:items-baseline sm:space-x-4">
            <h1 className="text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
              Order #{transaction?._id.substring(0,5)}
            </h1>
            <a
              href="/"
              className="hidden text-sm font-medium text-blue-100 hover:text-[#3B82F6] sm:block"
            >
              View invoice<span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
          <p className="text-sm text-[#4B5563]">
            Order placed{" "}
            <time dateTime="2021-03-22" className="font-medium text-[#111827]">
              {transaction?.from}
            </time>
          </p>
          <a
            href="/"
            className="text-sm font-medium text-blue-100 hover:text-[#3B82F6] sm:hidden"
          >
            View invoice<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        {/* Products */}
        <section aria-labelledby="products-heading" className="mt-6">
          <h2 id="products-heading" className="sr-only">
            Products purchased
          </h2>
          <div className="space-y-8">
              <div
                className="bg-white border-t border-b border-[#E5E7EB] shadow-sm sm:border sm:rounded-lg"
              >
                <div className="px-4 py-6 sm:px-6 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:p-8">
                  <div className="sm:flex lg:col-span-7">
                    <div className="flex-shrink-0 w-full overflow-hidden rounded-lg aspect-w-1 aspect-h-1 sm:aspect-none sm:w-40 sm:h-40">
                      <img
                        src={product?.images[0]}
                        alt="product"
                        className="object-cover object-center w-full h-full sm:w-full sm:h-full"
                      />
                    </div>

                    <div className="mt-6 sm:mt-0 sm:ml-6">
                      <h3 className="text-base font-medium text-[#111827]">
                        <a href={`product/${product?._id}`}>{product?.name}</a>
                      </h3>
                      <p className="mt-2 text-sm font-medium text-[#111827]">
                        ${product?.rentalCost}
                      </p>
                      <p className="mt-3 text-sm text-[#6B7280]">
                        {product?.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 lg:mt-0 lg:col-span-5">
                    <dl className="grid grid-cols-2 text-sm gap-x-6">
                      <div>
                        <dt className="font-medium text-[#111827]">
                          Delivery address
                        </dt>
                        <dd className="mt-3 text-[#6B7280]">
                          <span className="block">{currentUser.location}</span>
                        </dd>
                      </div>
                      <div>
                        <dt className="font-medium text-[#111827]">
                          Shipping updates
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
                  <h4 className="sr-only">Status</h4>
                  <p className="text-sm font-medium text-[#111827]">
                    {transaction?.status} on{" "}
                    {/*<time dateTime={product.datetime}>{product.f}</time>*/}
                  </p>
                  <div className="mt-6" aria-hidden="true">
                    <div className="overflow-hidden bg-[#E5E7EB] rounded-full">
                      <div
                        className="h-2 bg-blue-100 rounded-full"
                        style={{
                          width: `calc((1 * 2 + 1) / 8 * 100%)`,
                        }}
                      />
                    </div>
                    <div className="hidden grid-cols-4 mt-6 text-sm font-medium text-[#4B5563] sm:grid">
                      <div className="text-blue-100">Order placed</div>
                      <div
                        className={classNames(
                          1 ? "text-blue-100" : "",
                          "text-center",
                        )}
                      >
                        Processing
                      </div>
                      <div
                        className={classNames(
                          1 > 1 ? "text-blue-100" : "",
                          "text-center",
                        )}
                      >
                        Shipped
                      </div>
                      <div
                        className={classNames(
                          1 > 2 ? "text-blue-100" : "",
                          "text-right",
                        )}
                      >
                        Delivered
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          </div>
        </section>

        {/* Billing */}
        <section aria-labelledby="summary-heading" className="mt-16">
          <h2 id="summary-heading" className="sr-only">
            Billing Summary
          </h2>

          <div className="px-4 py-6 bg-[#F3F4F6] sm:px-6 sm:rounded-lg lg:px-8 lg:py-8 lg:grid lg:grid-cols-12 lg:gap-x-8">
            <dl className="grid grid-cols-2 gap-6 text-sm sm:grid-cols-2 md:gap-x-8 lg:col-span-7">
              <div>
                <dt className="font-medium text-[#111827]">Billing address</dt>
                <dd className="mt-3 text-[#6B7280]">
                  <span className="block">Floyd Miles</span>
                  <span className="block">7363 Cynthia Pass</span>
                  <span className="block">Toronto, ON N3Y 4H8</span>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-[#111827]">
                  Payment information
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
                <dt className="text-[#4B5563]">Subtotal</dt>
                <dd className="font-medium text-[#111827]">$72</dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="text-[#4B5563]">Shipping</dt>
                <dd className="font-medium text-[#111827]">$5</dd>
              </div>
              <div className="flex items-center justify-between py-4">
                <dt className="text-[#4B5563]">Tax</dt>
                <dd className="font-medium text-[#111827]">$6.16</dd>
              </div>
              <div className="flex items-center justify-between pt-4">
                <dt className="font-medium text-[#111827]">Order total</dt>
                <dd className="font-medium text-blue-100">$83.16</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
};

export default UserTransactionDetails;
