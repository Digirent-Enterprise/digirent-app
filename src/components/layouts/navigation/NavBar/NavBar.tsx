import React from "react";
import { Box, Button, Flex } from "@chakra-ui/react";
import { NavButton } from "./NavButton";
import { AvatarMenu } from "../../AvatarMenu";
// const NavLink = ({ children }: { children: ReactNode }) => (
//   <Link
//     px={2}
//     py={1}
//     rounded="md"
//     _hover={{
//       textDecoration: "none",
//       bg: useColorModeValue("gray.200", "gray.700"),
//     }}
//     href="#"
//   >
//     {children}
//   </Link>
// );
const NavBar = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bgColor="#222" px={7} py={3} h="90px">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Button
          variant="link"
          color="white"
          mr="4"
          py="1.5"
          fontSize="3xl"
          as="em"
        >
          Digirent
        </Button>
        <Flex alignItems="center">
          <NavButton navItem="Home" />
          <NavButton navItem="Contact" />
          <AvatarMenu />
        </Flex>
      </Flex>
    </Box>
  );
};

export { NavBar };
