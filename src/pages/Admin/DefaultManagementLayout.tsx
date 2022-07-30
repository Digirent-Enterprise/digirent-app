/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDisclosure } from "@chakra-ui/hooks";
import {
  DeleteProductModal,
  DeleteTransactionModal,
  DeleteUserModal,
  EditProductModal,
  EditTransactionModal,
  EditUserModal,
} from "../../components";

interface ColumnHeader {
  id: number;
  header: string;
}

interface ManagementTableProps {
  title: string;
  columnsHeader: Array<ColumnHeader>;
  pageType?: string;
}

const DefaultManagementLayout = ({
  title,
  columnsHeader,
  pageType,
}: ManagementTableProps) => {
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          {title}
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {columnsHeader.map((column) => {
              return (
                <th scope="col" className="px-6 py-3" key={column.id}>
                  {column.header}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td className="px-6 py-4">Apple MacBook Pro 17"</td>
            <td className="px-6 py-4">Sliver</td>
            <td className="px-6 py-4">Laptop</td>
            <td className="px-6 py-4">$2999</td>
            <td className="flex items-center px-6 py-4 space-x-3">
              <div
                onClick={onEditOpen}
                role="button"
                tabIndex={0}
                className="font-medium text-blue-100 dark:text-blue-500 hover:underline"
              >
                Edit
              </div>
              {pageType === "user" && (
                <EditUserModal isOpen={isEditOpen} onClose={onEditClose} />
              )}
              {pageType === "product" && (
                <EditProductModal isOpen={isEditOpen} onClose={onEditClose} />
              )}
              {pageType === "transaction" && (
                <EditTransactionModal
                  isOpen={isEditOpen}
                  onClose={onEditClose}
                />
              )}
              <div
                onClick={onDeleteOpen}
                role="button"
                tabIndex={0}
                className="font-medium text-red dark:text-red-500 hover:underline"
              >
                Remove
              </div>
              {pageType === "user" && (
                <DeleteUserModal
                  isOpen={isDeleteOpen}
                  onClose={onDeleteClose}
                />
              )}
              {pageType === "product" && (
                <DeleteProductModal
                  isOpen={isDeleteOpen}
                  onClose={onDeleteClose}
                />
              )}
              {pageType === "transaction" && (
                <DeleteTransactionModal
                  isOpen={isDeleteOpen}
                  onClose={onDeleteClose}
                />
              )}
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        className="flex items-center justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>

        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              className="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 px-3 py-2 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DefaultManagementLayout;
