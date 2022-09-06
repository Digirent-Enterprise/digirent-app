import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
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
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import { customAxios } from "../../../http-common";
import { deleteUserSession } from "../../../store/actions/user.action";
import { clearUserSession } from "../../../helpers/authHelpers";

const UserProfileDeactivateButton = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(deleteUserSession());
    clearUserSession();
    navigate("/");
  };

  const handleDeactivated = async () => {
    const response: any = await customAxios()
      .put("user/edit-user", qs.stringify({ status: false }))
      .catch(() =>
        toast.error("Error when deactivating your account", { theme: "dark" }),
      );
    if (response && (response.status === 200 || response.status === 201)) {
      toast.success("Deactivate account successfully", { theme: "dark" });
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
        {t("DeactivateAcc")}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <div className="text-center justify-center p-[8%]">
            <svg
              aria-hidden="true"
              className="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
              fill="none"
              stroke="#AE1010"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="pb-3 text-2xl font-bold">{t("DeactivateAcc")}</p>
            <p>{t("DeactivateWarning")}</p>
          </div>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={onClose}
              className="w-1/2"
            >
              {t("Close")}
            </Button>
            <Button
              onClick={handleDeactivated}
              type="submit"
              colorScheme="red"
              mr={3}
              className="w-1/2"
            >
              {t("Deactivate")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </form>
  );
};

export default UserProfileDeactivateButton;
