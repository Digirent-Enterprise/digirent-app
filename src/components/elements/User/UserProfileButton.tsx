import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import { IconContext } from "react-icons";

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
        <div className="flex align-center justify-center">
          <IconContext.Provider
            value={{
              style: { verticalAlign: "middle", color: "#4169E1" },
              size: "30px",
              className: "global-class-name",
            }}
          >
            <div>{leftIcon}</div>
          </IconContext.Provider>
          <Text color="#4169E1" className=" mx-1 sm:mx-2 mb-10 text-lg">
            {userButtonItem}
          </Text>
        </div>
      </Link>
    </form>
  );
};

export default UserProfileButton;
