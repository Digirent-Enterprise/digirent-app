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

const AvatarMenu = () => {
  return (
    <Flex alignItems="right">
      <Stack direction="row" spacing={7}>
        <Menu>
          <MenuButton
            as={Button}
            rounded="full"
            variant="link"
            cursor="pointer"
            minW={0}
            p="2"
          >
            <Avatar
              size="sm"
              src="https://avatars.dicebear.com/api/male/username.svg"
            />
          </MenuButton>
          <MenuList alignItems="center">
            <br />
            <Center>
              <Avatar
                size="2xl"
                src="https://avatars.dicebear.com/api/male/username.svg"
              />
            </Center>
            <br />
            <Center>
              <p>Joe Mama</p>
            </Center>
            <br />
            <MenuDivider />
            <MenuItem>Account Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </MenuList>
        </Menu>
      </Stack>
    </Flex>
  );
};

export { AvatarMenu };
