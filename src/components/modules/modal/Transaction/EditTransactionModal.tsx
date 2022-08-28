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

interface EditTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const inputs = [
  {
    label: "Transaction ID",
    placeHolder: "New Product ID",
  },
  {
    label: "User Email",
    placeHolder: "New User Email",
  },
  {
    label: "Total Cost",
    placeHolder: "New Total Cost",
  },
  {
    label: "Borrowed Dated",
    placeHolder: "Set new Borrowed Dated",
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
const EditTransactionModal = ({
  isOpen,
  onClose,
}: EditTransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay
        opacity="0.5"
        // filter="alpha(opacity=65)"
        // filter="opacity(0.5)"
        filter="blur(20px)"
      />
      <ModalContent>
        <ModalHeader>Edit Transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody />
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

export default EditTransactionModal;
