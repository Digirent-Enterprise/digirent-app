import React, { ReactNode } from "react";
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

interface RootDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const RootDeleteModal = ({
  isOpen,
  onClose,
  children,
}: RootDeleteModalProps) => {
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
            {children}
          </div>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="red" mr={3} onClick={onClose}>
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

export default RootDeleteModal;
