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
import qs from "qs";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { customAxios } from "../../../../http-common";
import { getUsers } from "../../../../store/actions/user.action";

interface DeleteUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: any;
}

const DeleteUserModal = ({
  isOpen,
  onClose,
  rowData,
}: DeleteUserModalProps) => {
  const dispatch = useDispatch();
  const handleDelete = async () => {
    await customAxios()
      .post("user/delete-user", qs.stringify(rowData.email))
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(getUsers());
          onClose();
          toast.success("Delete user successfully!", {
            theme: "dark",
            icon: "🚀",
          });
        }
      })
      .catch((error: any) => {
        toast.warning(`${error.response.data} error, failed to delete user!`, {
          theme: "dark",
        });
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
            <h1 className="my-5 text-4xl text-red">Delete User</h1>
            <h3 className="mt-5 text-lg font-normal decoration-current">
              Are you sure you want to delete this user?
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
export default DeleteUserModal;
