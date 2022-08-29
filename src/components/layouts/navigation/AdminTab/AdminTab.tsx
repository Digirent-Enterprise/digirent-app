import "./AdminTab.css";

const AdminTab = () => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-center ">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin"
            >
              General
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/chat"
            >
              Chat
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/users"
            >
              Users
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/products"
            >
              Products
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/transactions"
            >
              Transactions
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/inquiries"
            >
              Customer Inquiries
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/add-product"
            >
              Add Product
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdminTab;
