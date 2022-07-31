import React from "react";
import RootDeleteModal from "../RootDeleteModal";
import { UserModalProps } from "./users.type";

const DeleteUserModal = (props: UserModalProps) => {
  return (
    <RootDeleteModal {...props}>
      <h1 className="my-5 text-4xl text-red">Delete User</h1>
      <h3 className="mt-5 text-lg font-normal decoration-current">
        Are you sure you want to delete this user?
      </h3>
      <h3 className="text-lg font-normal decoration-current">
        This action cannot be undone
      </h3>
    </RootDeleteModal>
  );
};
export default DeleteUserModal;
