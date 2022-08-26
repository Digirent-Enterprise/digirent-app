import React from "react";
import { Button, Link } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Button
      variant="link"
      color="white"
      mr="4"
      pl="30px"
      py="1.5"
      fontSize="3xl"
    >
      <Link href="/">Digirent</Link>
    </Button>
  );
};

export default Logo;
