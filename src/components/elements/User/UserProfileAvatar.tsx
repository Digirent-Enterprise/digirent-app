import React from "react";
import { Avatar } from "@chakra-ui/react";

interface IUserProfileAvatar{}

const UserProfileAvatar = () => {
  return (
    <Avatar
      boxSize="350px"
      src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
      mb={4}
      pos="relative"
    />
  );
};

export default UserProfileAvatar;
