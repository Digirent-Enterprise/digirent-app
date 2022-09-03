import React, { useRef } from "react";
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
import { useDispatch } from "react-redux";
import qs from "qs";
import { toast } from "react-toastify";
import { getTransactions } from "../../../../store/actions/transaction.action";
import { customAxios } from "../../../../http-common";

interface EditTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: any;
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
  rowData,
}: EditTransactionModalProps) => {
  const dispatch = useDispatch();

  const inputs = [
    {
      label: "User Email",
      defaultValue: rowData.userEmail,
    },
    {
      label: "Status",
      defaultValue: rowData.status,
    },
  ];

  const inputRef = useRef<any>([]);

  const handleEdit = async () => {
    const updateTransaction = {
      id: rowData._id,
      intent: rowData.intent,
      userEmail: inputRef.current[0].value,
      status: inputRef.current[1].value,
    };

    await customAxios()
      .put(
        "transaction/update-transaction",
        qs.stringify({
            ...updateTransaction,
            intent: updateTransaction.intent,

        }),
      )
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(getTransactions());
          onClose();
          toast.success("Update transaction successfully!", {
            theme: "dark",
            icon: "🚀",
          });
        }
      })
      .catch((error: any) => {
        toast.warning(
          `${error.response.data} error, failed to update transaction!`,
          {
            theme: "dark",
          },
        );
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
        <ModalHeader>Edit Transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody />
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

export default EditTransactionModal;
