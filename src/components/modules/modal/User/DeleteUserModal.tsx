import React from "react";
import RootDeleteModal from "../RootDeleteModal";
import { UserModalProps } from "./users.type";

const DeleteUserModal = (props: UserModalProps) => {
  return (
    <RootDeleteModal {...props}>
      <h1 className="mb-5">Delete User</h1>
      <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
        Are you sure you want to delete this user? This action cannot be undone
      </h3>
    </RootDeleteModal>
  );
};
export default DeleteUserModal;
