import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

interface IUserProfileName {
    userName: string;
}

const UserProfileName = ({ userName }: IUserProfileName) => {
  return (
    <Heading fontSize="2xl" fontFamily="body">
      {userName}
    </Heading>
  );
};

export default UserProfileName;