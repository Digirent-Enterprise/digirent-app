import React, { ReactNode, useState } from "react";
import { Button } from "@chakra-ui/react";
import { BsKey } from "react-icons/bs";
import { Link } from "react-router-dom";

// interface IUserButton {
//   userItem: string;
//   directUrl: string;
//   hoverBackgroundColor: string;
//   focusBackgroundColor: string;
// }
interface IUserButton {
  userButtonItem: string;
  directUrl: string;
  leftIcon: any;
}

const UserProfileButton = ({
  userButtonItem,
  directUrl,
  leftIcon,
}: IUserButton) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  return (
    <Button
      flex={1}
      fontSize="sm"
      maxW="250px"
      rounded="full"
      color="white"
      style={{
        backgroundColor: isHovering ? "#153289" : "#4169E1",
        color: isHovering ? "#fff" : "",
      }}
      leftIcon={leftIcon}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={directUrl}>{userButtonItem}</Link>
    </Button>
  );
};

export default UserProfileButton;
