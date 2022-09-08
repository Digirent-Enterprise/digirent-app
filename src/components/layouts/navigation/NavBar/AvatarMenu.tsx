import React from "react";
import { useTranslation } from "react-i18next";
import {
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
  Center,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getCurrentUserSelector } from "../../../../store/selectors/user.selector";
import { IMAGES } from "../../../../utils/constants/image.constant";
import { customAxios } from "../../../../http-common";
import { clearUserSession } from "../../../../helpers/authHelpers";
import { deleteUserSession } from "../../../../store/actions/user.action";

const AvatarMenu = () => {
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
    <Flex alignItems="right">
      <Stack direction="row" spacing={7} className="z-50">
        <Menu isLazy>
          <MenuButton
            as={Button}
            rounded="full"
            variant="link"
            cursor="pointer"
            minW={0}
            p="2"
          >
            {!currentUser.profileImage ? (
              <Avatar
                size="sm"
                src={window.location.origin + IMAGES.defaultAvatar}
              />
            ) : (
              <Avatar size="sm" src={currentUser.profileImage} />
            )}
          </MenuButton>
          <MenuList alignItems="center">
            <br />
            <Center>
              {!currentUser.profileImage ? (
                <Avatar
                  size="2xl"
                  src={window.location.origin + IMAGES.defaultAvatar}
                />
              ) : (
                <Avatar size="2xl" src={currentUser.profileImage} />
              )}
            </Center>
            <br />
            <Center>
              <p>{currentUser.name}</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem onClick={() => navigate("/user/my-profile")}>
              {t("AccountSetting")}
            </MenuItem>
            <MenuItem
              onClick={() => navigate("/transaction/transaction-history")}
            >
              {t("OrderHistory")}
            </MenuItem>
            <MenuItem onClick={() => logOut()}>{t("Logout")}</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
};

export default AvatarMenu;
