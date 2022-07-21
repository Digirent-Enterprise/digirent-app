import DeleteProductModal from "./Product/DeleteProductModal";

const MODAL_COMPONENTS = {
  DELETE_PRODUCT: DeleteProductModal,
  /* other modals */
};

interface ModalType {
  modalType: string;
  modalProps: {};
}

function RootModal({ modalType, modalProps }: ModalType) {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
}
