import { useDisclosure } from "@chakra-ui/hooks";
import {
  DeleteProductModal,
  DeleteTransactionModal,
  DeleteUserModal,
  EditProductModal,
  EditTransactionModal,
  EditUserModal,
} from "../../../components";

interface HandleProps {
  pageType: string;
}

export const ClickEdit = ({ pageType }: HandleProps) => {
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={onEditOpen}
      role="button"
      tabIndex={0}
      className="font-medium text-blue dark:text-blue-500 hover:underline"
    >
      Edit
      {pageType === "user" && (
        <EditUserModal isOpen={isEditOpen} onClose={onEditClose} />
      )}
      {pageType === "product" && (
        <EditProductModal isOpen={isEditOpen} onClose={onEditClose} />
      )}
      {pageType === "transaction" && (
        <EditTransactionModal isOpen={isEditOpen} onClose={onEditClose} />
      )}
    </div>
  );
};

export const ClickDelete = ({ pageType }: HandleProps) => {
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      onClick={onDeleteOpen}
      role="button"
      tabIndex={0}
      className="font-medium text-red dark:text-red-500 hover:underline"
    >
      Delete
      {pageType === "user" && (
        <DeleteUserModal isOpen={isDeleteOpen} onClose={onDeleteClose} />
      )}
      {pageType === "product" && (
        <DeleteProductModal isOpen={isDeleteOpen} onClose={onDeleteClose} />
      )}
      {pageType === "transaction" && (
        <DeleteTransactionModal isOpen={isDeleteOpen} onClose={onDeleteClose} />
      )}
    </div>
  );
};
