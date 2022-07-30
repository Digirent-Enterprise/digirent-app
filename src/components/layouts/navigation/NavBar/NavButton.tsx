import React from "react";
import { Button, Box } from "@chakra-ui/react";

interface INavButton {
  navItem: string;
}

const NavButton = ({ navItem }: INavButton) => {
  return (
    <Box pr="3">
      <Button
        colorScheme="blackAlpha"
        variant="ghost"
        alignItems="center"
        color="white"
      >
        {navItem}
      </Button>
    </Box>
  );
};

export { NavButton };
