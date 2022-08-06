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
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../../../store/selectors/user.selector";
import IMAGES from "../../../../utils/constants/image.constant";
import { customAxios } from "../../../../http-common";

const AvatarMenu = () => {
  const navigate = useNavigate();
  const currentUser = useSelector(getCurrentUser);

  const logOut = () => {
    customAxios().post("auth/logout");
    navigate(0);
  };

  return (
    <Flex alignItems="right">
      <Stack direction="row" spacing={7}>
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
            <MenuItem onClick={() => navigate("/user/profile")}>
              Account Settings
            </MenuItem>
            <MenuItem onClick={() => navigate("/user/transactions")}>
              Transaction History
            </MenuItem>
            <MenuItem onClick={() => logOut()}>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
};

export default AvatarMenu;
