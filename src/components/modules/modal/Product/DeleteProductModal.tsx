import React from "react";
import RootDeleteModal from "../RootDeleteModal";
import { ProductModalProps } from "./products.type";

function DeleteProductModal(props: ProductModalProps) {
  return (
    <RootDeleteModal {...props}>
      <h1 className="mb-5">Delete Product</h1>
      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        Are you sure you want to delete this product? This action cannot be
        undone
      </h3>
    </RootDeleteModal>
  );
}
export default DeleteProductModal;
