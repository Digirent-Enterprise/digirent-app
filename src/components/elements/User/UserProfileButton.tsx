import React, { ReactNode, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { IconContext } from "react-icons";

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
  return (
    <form action="">
      <Link to={directUrl}>
        <div className="flex">
          <IconContext.Provider
            value={{
              style: { verticalAlign: "middle", color: "#4169E1" },
              size: "30px",
              className: "global-class-name",
            }}
          >
            <div>{leftIcon}</div>
          </IconContext.Provider>
          <Text color="#4169E1" className="mx-2 mb-10 text-lg">
            {userButtonItem}
          </Text>
        </div>
      </Link>
    </form>
  );
};

export default UserProfileButton;
