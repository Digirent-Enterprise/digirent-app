import React from "react";
import { Button } from "@chakra-ui/react";
import { useState } from "react";
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
}

const UserProfileButton = ({ userButtonItem, directUrl }: IUserButton) => {
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={directUrl}>{userButtonItem}</Link>
    </Button>
  );
};

export default UserProfileButton;
