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
import qs from "qs";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { customAxios } from "../../../../http-common";
import { getProducts } from "../../../../store/actions/product.action";

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: any;
}

const EditProductModal = ({
  isOpen,
  onClose,
  rowData,
}: EditProductModalProps) => {
  const dispatch = useDispatch();

  const inputs = [
    {
      label: "Product Name",
      defaultValue: rowData.name,
    },
    {
      label: "Product Serial",
      defaultValue: rowData.serial,
    },
    {
      label: "Brand",
      defaultValue: rowData.brand,
    },
    {
      label: "Category",
      defaultValue: rowData.category,
    },
    {
      label: "Description",
      defaultValue: rowData.description,
    },
    {
      label: "Status",
      defaultValue: rowData.status,
    },
  ];

  const inputRef = useRef<any>([]);

  const handleEdit = async () => {
    const updatedProduct = {
      id: rowData._id,
      name: inputRef.current[0].value,
      serial: inputRef.current[1].value,
      brand: inputRef.current[2].value,
      category: inputRef.current[3].value,
      description: inputRef.current[4].value,
      status: inputRef.current[5].value,
    };

    console.log("updatedProduct", updatedProduct);

    await customAxios()
      .put("product/update-product", qs.stringify(updatedProduct))
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(getProducts());
          onClose();
          toast.success("Update product successfully!", {
            theme: "dark",
            icon: "🚀",
          });
        }
      })
      .catch((error: any) => {
        toast.warning(
          `${error.response.data} error, failed to update product!`,
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
        <ModalHeader>Edit Product</ModalHeader>
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

export default EditProductModal;
