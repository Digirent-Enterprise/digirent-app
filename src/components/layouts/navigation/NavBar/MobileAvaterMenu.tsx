import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCurrentUserSelector } from "../../../../store/selectors/user.selector";
import { customAxios } from "../../../../http-common";
import { clearUserSession } from "../../../../helpers/authHelpers";
import { deleteUserSession } from "../../../../store/actions/user.action";

export const MobileAvaterMenu = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const currentUser = useSelector(getCurrentUserSelector);
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(deleteUserSession());
    customAxios()
      .post("auth/logout")
      .then((res: any) => {
        if (res.status === 200) {
          toast.success("You have successfully logged out!", {
            theme: "dark",
          });
          clearUserSession();
          navigate("/");
        }
      });
  };
  return (
    <Menu>
      <MenuButton
        as={Button}
        background="#222"
        _hover={{ bg: "#777" }}
        className="text-white"
      >
        {currentUser.name}
      </MenuButton>
      <MenuList className="text-sm">
        <MenuItem onClick={() => navigate("/user/my-profile")}>
          {t("AccountSetting")}
        </MenuItem>
        <MenuItem onClick={() => navigate("/transaction/transaction-history")}>
          {t("OrderHistory")}
        </MenuItem>
        <MenuItem onClick={() => logOut()}>{t("Logout")}</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MobileAvaterMenu;
