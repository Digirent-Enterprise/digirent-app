import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import { IconContext } from "react-icons";

import { AiOutlineExclamationCircle, AiOutlineClose } from "react-icons/ai";

interface RootDeleteModalProps {
  visible?: boolean;
  onClose?: () => void;
  onSubmit?: () => void;
  children?: ReactNode;
}

function RootDeleteModal({ visible, onClose, children }: RootDeleteModalProps) {
  const el = document.getElementById("root");
  return (
    el &&
    ReactDOM.createPortal(
      <div
        style={{ visibility: visible ? "visible" : "hidden" }}
        className="fixed z-50 flex items-center justify-center bg-modal/75 md:inset-0 h-modal md:h-full"
      >
        <div className="relative w-full h-full max-w-md p-4 md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              type="button"
              onClick={onClose}
              className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            >
              <AiOutlineClose />
            </button>
            <div className="p-6 text-center">
              <IconContext.Provider
                // eslint-disable-next-line react/jsx-no-constructed-context-values
                value={{
                  size: "2em",
                  className: "text-red-600",
                }}
              >
                <div className="flex items-center justify-center">
                  <AiOutlineExclamationCircle />
                </div>
              </IconContext.Provider>
              {children}
              <button
                type="button"
                onClick={onClose}
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600  mr-2"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={onClose}
                className="text-white bg-red hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>,
      el,
    )
  );
}

export default RootDeleteModal;
