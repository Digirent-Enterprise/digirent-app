import "./AdminTab.css";

const AdminTab = () => {
  return (
    <div className="px-4 py-6">
      <div className="flex justify-center ">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-6">
            <a className="inline-block p-4 w-full bg-white" href="/admin">
              General
            </a>
          </li>
          <li className="mr-6">
            <a className="inline-block p-4 w-full bg-white" href="/admin/chat">
              Chat
            </a>
          </li>
          <li className="mr-6">
            <a className="inline-block p-4 w-full bg-white" href="/admin/users">
              Users
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white"
              href="/admin/products"
            >
              Products
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white"
              href="/admin/transactions"
            >
              Transactions
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white"
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
