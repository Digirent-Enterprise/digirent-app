import React from "react";
import { useSelector } from "react-redux";
import { IconContext } from "react-icons";
import { TbHeartOff } from "react-icons/tb";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

const UserProfileDeactivateButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <form>
      {" "}
      <Button
        onClick={onOpen}
        flex={1}
        maxW="300px"
        fontSize="sm"
        rounded="full"
        alignItems="center"
        bg="#FF385C"
        color="white"
        _hover={{
          bg: "#AE1010",
        }}
      >
        <IconContext.Provider
          value={{
            style: { verticalAlign: "middle", color: "white" },
            size: "25px",
            className: "global-class-name",
          }}
        >
          <div className="pr-2">
            <TbHeartOff />
          </div>
        </IconContext.Provider>
        Deactivate account
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="text-center justify-center p-[8%]">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 w-14 h-14 text-gray-400 dark:text-gray-200"
              fill="none"
              stroke="#11995B"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p className="text-2xl font-bold pb-3">Deactivate account</p>
            <p>Are you sure you want to deactivate your account?</p>
          </div>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              className="w-1/2"
            >
              Close
            </Button>
            <Button type="submit" colorScheme="red" mr={3} className="w-1/2">
              Deactivate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
};

export default UserProfileDeactivateButton;
