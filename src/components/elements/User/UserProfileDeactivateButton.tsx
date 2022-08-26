import React from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { customAxios } from "../../../http-common";
import { toast } from "react-toastify";
import { deleteUserSession } from "../../../store/actions/user.action";
import { clearUserSession } from "../../../helpers/authHelpers";
import { useNavigate } from "react-router-dom";
import qs from "qs";

const UserProfileDeactivateButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(deleteUserSession());
    clearUserSession();
    navigate("/");
  };

  const _handleDeactivated = async () => {
    const response: any = await customAxios()
      .put("user/edit-user", qs.stringify({ status: false }))
      .catch((e) => toast.error("Error when deactivating your account"));
    if (response && (response.status === 200 || response.status === 201)) {
      toast.success("Deactivate Successfully");
      setTimeout(() => logOut(), 3000);
    }
  };

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
            <Button
              onClick={_handleDeactivated}
              type="submit"
              colorScheme="red"
              mr={3}
              className="w-1/2"
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
