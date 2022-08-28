import React from "react";
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

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const inputs = [
  {
    label: "Username",
    placeHolder: "New username",
  },
  {
    label: "Email",
    placeHolder: "New email",
  },
  {
    label: "Phone Number",
    placeHolder: "New phone number",
  },
  {
    label: "Role",
    placeHolder: "Set new role",
  },
  {
    label: "Location",
    placeHolder: "New location",
  },
];
const EditUserModal = ({ isOpen, onClose }: EditUserModalProps) => {
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
          {inputs.map((input) => (
            <div>
              <ModalCloseButton />
              <ModalBody />
              <FormControl py="5px" px="20px">
                <FormLabel className="pb-2">{input.label}</FormLabel>
                <Input
                  placeholder={input.placeHolder}
                  _placeholder={{ color: "#777" }}
                  type="text"
                  width="525px"
                  className="align-center justify-center"
                />
              </FormControl>
            </div>
          ))}
        </ul>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
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
