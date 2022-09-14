import { useDisclosure } from "@chakra-ui/hooks";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  DeleteProductModal,
  DeleteUserModal,
  EditProductModal,
  EditTransactionModal,
  EditUserModal,
  InquiryModal,
} from "../../../components";
import ViewDetailModal from "../../../components/modules/modal/ViewDetailModal";
import { getCurrentUserSelector } from "../../../store/selectors/user.selector";

interface HandleProps {
  pageType: string;
  rowData: any;
}

export const ClickEdit = ({ pageType, rowData }: HandleProps) => {
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
        <EditUserModal
          isOpen={isEditOpen}
          onClose={onEditClose}
          rowData={rowData.values}
        />
      )}
      {pageType === "product" && (
        <EditProductModal
          isOpen={isEditOpen}
          onClose={onEditClose}
          rowData={rowData.values}
        />
      )}
      {pageType === "transaction" && (
        <EditTransactionModal
          isOpen={isEditOpen}
          onClose={onEditClose}
          rowData={rowData.values}
        />
      )}
    </div>
  );
};

export const ClickDelete = ({ pageType, rowData }: HandleProps) => {
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
        <DeleteUserModal
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
          rowData={rowData.values}
        />
      )}
      {pageType === "product" && (
        <DeleteProductModal
          isOpen={isDeleteOpen}
          onClose={onDeleteClose}
          rowData={rowData.values}
        />
      )}
    </div>
  );
};

export const ResponseToInquiryAction = ({ rowData }: any) => {
  const { isOpen: modalOpen, onClose, onOpen } = useDisclosure();
  const currentUser = useSelector(getCurrentUserSelector);
  const currentUserData = useMemo(() => currentUser, currentUser);

  return (
    <InquiryModal
      isOpen={modalOpen}
      onClose={onClose}
      onOpen={onOpen}
      currentUserData={currentUserData}
      rowData={rowData.values}
    />
  );
};

export const ViewDetailModalAction = ({ pageType, rowData }: any) => {
  const { isOpen: modalOpen, onClose, onOpen } = useDisclosure();

  return (
    <ViewDetailModal
      isOpen={modalOpen}
      onClose={onClose}
      onOpen={onOpen}
      rowData={rowData.values}
      pageType={pageType}
    />
  );
};
