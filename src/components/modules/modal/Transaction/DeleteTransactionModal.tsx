import { IconContext } from "react-icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { customAxios } from "../../../../http-common";
import { getTransactions } from "../../../../store/actions/transaction.action";

interface DeleteTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: any;
}

const DeleteTransactionModal = ({
  isOpen,
  onClose,
  rowData,
}: DeleteTransactionModalProps) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await customAxios()
      .delete("transaction/delete-transaction", {
        params: { id: rowData._id },
      })
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(getTransactions());
          onClose();
          toast.success("Delete transaction successfully!", {
            theme: "dark",
            icon: "🚀",
          });
        }
      })
      .catch((error: any) => {
        toast.warning(
          `${error.response.data} error, failed to delete transaction!`,
          {
            theme: "dark",
          },
        );
      });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay
        opacity="0.5"
        // filter="alpha(opacity=65)"
        // filter="opacity(0.5)"
        filter="blur(20px)"
      />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <div className="p-6 text-center">
            <IconContext.Provider
              // eslint-disable-next-line react/jsx-no-constructed-context-values
              value={{
                size: "4em",
                className: "text-red",
              }}
            >
              <div className="flex items-center justify-center">
                <AiOutlineExclamationCircle />
              </div>
            </IconContext.Provider>
            <h1 className="my-5 text-4xl text-red">Delete Transaction</h1>
            <h3 className="mt-5 text-lg font-normal decoration-current">
              Are you sure you want to delete this transaction?
            </h3>
            <h3 className="text-lg font-normal decoration-current">
              This action cannot be undone
            </h3>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={handleDelete}>
            Delete
          </Button>
          <Button colorScheme="telegram" onClick={onClose} variant="outline">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
export default DeleteTransactionModal;
