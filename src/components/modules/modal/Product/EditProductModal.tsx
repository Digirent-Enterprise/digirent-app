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

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const inputs = [
  {
    label: "Transaction ID",
    placeHolder: "New Transaction ID",
  },
  {
    label: "User Email",
    placeHolder: "New User Email",
  },
  {
    label: "Total Rental",
    placeHolder: "New Total Rental",
  },
  {
    label: "Borrowed Date",
    placeHolder: "Set new Borrowed Date",
  },
  {
    label: "Return Date",
    placeHolder: "New Return Date",
  },
  {
    label: "Status",
    placeHolder: "New Status",
  },
  {
    label: "Product ID",
    placeHolder: "New Product ID",
  },
];
const EditProductModal = ({ isOpen, onClose }: EditProductModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay
        opacity="0.5"
        // filter="alpha(opacity=65)"
        // filter="opacity(0.5)"
        filter="blur(20px)"
      />

      <ModalContent>
        <ModalHeader>Edit Product</ModalHeader>
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

export default EditProductModal;
