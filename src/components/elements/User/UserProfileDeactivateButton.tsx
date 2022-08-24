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
          <div className="text-center justify-center p-[10%]">
            <div className="flex align-center justify-center color-[#FF385C] pb-8">
              <TbHeartOff size="60" color="#FF385C" />
            </div>
            <p>Are you sure you want to deactivate your account?</p>
          </div>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              type="submit"
              mr={3}
              colorScheme="red"
              className="color-[#FF385C]"
            >
              Deactivate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
};

export default UserProfileDeactivateButton;
