import React from "react";
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
            {!currentUser.avatar ? (
              <Avatar
                size="sm"
                src={window.location.origin + IMAGES.defaultAvatar}
              />
            ) : (
              <Avatar size="sm" src={currentUser.avatar} />
            )}
          </MenuButton>
          <MenuList alignItems="center">
            <br />
            <Center>
              {!currentUser.avatar ? (
                <Avatar
                  size="2xl"
                  src={window.location.origin + IMAGES.defaultAvatar}
                />
              ) : (
                <Avatar size="2xl" src={currentUser.avatar} />
              )}
            </Center>
            <br />
            <Center>
              <p>{currentUser.name}</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem onClick={() => navigate("/user/:id/profile")}>
              Account Settings
            </MenuItem>
            <MenuItem onClick={() => navigate("/user/:id/transaction")}>
              Order History
            </MenuItem>
            <MenuItem onClick={() => navigate("/user/:id/favorites")}>
              Favorite Products
            </MenuItem>
            <MenuItem onClick={() => logOut()}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
};

export default AvatarMenu;
