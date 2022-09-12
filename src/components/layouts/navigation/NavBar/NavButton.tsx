import React from "react";
import { Button, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface INavButton {
  navItem: string;
  directUrl: string;
}

const NavButton = ({ navItem, directUrl }: INavButton) => {
  return (
    <li>
      <Box className="">
        <Button colorScheme="blackAlpha" variant="ghost" color="white">
          <Link to={directUrl}>{navItem}</Link>
        </Button>
      </Box>
    </li>
  );
};

export default NavButton;
