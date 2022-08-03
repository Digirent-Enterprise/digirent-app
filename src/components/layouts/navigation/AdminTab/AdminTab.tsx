import "./AdminTab.css";

const AdminTab = () => {
  return (
    <div className="flex justify-center">
      <ul className="flex">
        <li className="mr-6">
          <a className="text-black hover:text-blue-100 link" href="/admin">
            Home
          </a>
        </li>
        <li className="mr-6">
          <a className="text-black hover:text-blue-100 link" href="/admin/chat">
            Chat
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-black hover:text-blue-100 link"
            href="/admin/users"
          >
            Users
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-black hover:text-blue-100 link"
            href="/admin/products"
          >
            Products
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-black hover:text-blue-100 link"
            href="/admin/transactions"
          >
            Transactions
          </a>
        </li>
        <li className="mr-6">
          <a
            className="text-black hover:text-blue-100 link"
            href="/admin/products"
          >
            Add Product
          </a>
        </li>
      </ul>
    </div>
  );
};
export default AdminTab;
