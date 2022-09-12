import { useTranslation } from "react-i18next";
import "./AdminTab.css";

const AdminTab = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 py-6">
      <div className="flex justify-center ">
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin"
            >
              {t("General")}
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/users"
            >
              {t("Users")}
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/products"
            >
              {t("Products")}
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/transactions"
            >
              {t("Transaction")}
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/inquiries"
            >
              {t("CustomerInq")}
            </a>
          </li>
          <li className="mr-6">
            <a
              className="inline-block p-4 w-full bg-white text-black hover:text-blue-100 link"
              href="/admin/add-product"
            >
              {t("AddProd")}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default AdminTab;
