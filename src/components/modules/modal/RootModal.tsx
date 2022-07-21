import ReactDOM from "react-dom";
import React, {ReactNode} from "react";

interface RootModalProps {
    visible?: boolean;
    onCLose?: () => void;
    onSubmit?: () => void;
    children?: ReactNode

}

function RootModal(props: RootModalProps) {
    const { visible, onCLose } = props;
    const el = document.getElementById('root-modal');
    return el && ReactDOM.createPortal(
        <div id="modal-wrapper">
            <div
                style={{ visibility: visible ? "visible" : "hidden" }}
                id="popup-modal"
                className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full"
            >
                {props.children}
                <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    onClick={onCLose}
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                >
                    No, cancel
                </button>
                <button
                    data-modal-toggle="popup-modal"
                    type="button"
                    onClick={onCLose}
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                >
                    Yes, I'm sure
                </button>
            </div>
        </div>,
        el,
    )
}

export default RootModal;
