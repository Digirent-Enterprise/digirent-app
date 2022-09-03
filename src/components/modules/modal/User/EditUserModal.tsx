import { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ModalHeader,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import qs from "qs";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { customAxios } from "../../../../http-common";
import { getUsers } from "../../../../store/actions/user.action";

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: any;
}

const EditUserModal = ({ isOpen, onClose, rowData }: EditUserModalProps) => {
  const dispatch = useDispatch();

  const inputs = [
    {
      label: "Username",
      defaultValue: rowData.name,
    },
    {
      label: "Email",
      defaultValue: rowData.email,
    },
    {
      label: "Phone Number",
      defaultValue: rowData.phone,
    },
    {
      label: "Role",
      defaultValue: rowData.role,
    },
    {
      label: "Location",
      defaultValue: rowData.location,
    },
  ];

  const inputRef = useRef<any>([]);

  const handleEdit = async () => {
    const updateUser = {
      id: rowData._id,
      name: inputRef.current[0].value,
      email: inputRef.current[1].value,
      phone: inputRef.current[2].value,
      role: inputRef.current[3].value,
      location: inputRef.current[4].value,
    };

    await customAxios()
      .put("user/admin-edit-user", qs.stringify(updateUser))
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(getUsers());
          onClose();
          toast.success("Update user successfully!", {
            theme: "dark",
            icon: "🚀",
          });
        }
      })
      .catch((error: any) => {
        toast.warning(`${error.response.data} error, failed to update user!`, {
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
        <ModalHeader>Edit User</ModalHeader>
        <ul>
          {inputs.map((input, index) => (
            <div>
              <ModalCloseButton />
              <ModalBody />
              <FormControl py="5px" px="20px">
                <FormLabel className="pb-2">{input.label}</FormLabel>
                <Input
                  defaultValue={input.defaultValue}
                  key={index}
                  ref={(ref) => inputRef.current.push(ref)}
                  _placeholder={{ color: "#777" }}
                  type="text"
                  width="525px"
                  className="justify-center align-center"
                />
              </FormControl>
            </div>
          ))}
        </ul>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleEdit}>
            Edit
          </Button>
          <Button colorScheme="telegram" onClick={onClose} variant="outline">
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditUserModal;
