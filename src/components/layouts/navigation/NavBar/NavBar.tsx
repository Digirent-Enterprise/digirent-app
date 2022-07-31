import React from "react";
import { useSelector } from "react-redux";
import { Box, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { NavButton } from "./NavButton";
import { AvatarMenu } from "./AvatarMenu";
import { getCurrentUser } from "../../../../store/selectors/user.selector";

const NavBar = () => {
  const currentUser = useSelector(getCurrentUser);
  return (
    <Box bgColor="#222" px={7} py={3} h="90px">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Logo />
        <Flex alignItems="center">
          <NavButton navItem="Home" />
          <NavButton navItem="Contact" />
          {!currentUser ? <NavButton navItem="Login" /> : <AvatarMenu />}
        </Flex>
      </Flex>
    </Box>
  );
};

export { NavBar };
