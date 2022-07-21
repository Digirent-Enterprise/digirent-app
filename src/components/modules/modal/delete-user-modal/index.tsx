import React from "react";
import RootModal from "../RootModal";
import {DeleteUserModalProps} from "./type";
function DeleteUserModal(props: DeleteUserModalProps) {
    return (
        <RootModal {...props}>
            <h1 style={{fontSize:'500px'}}> Product </h1>
        </RootModal>
    )
}
export default DeleteUserModal;
