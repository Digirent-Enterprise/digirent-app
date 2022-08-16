import React from "react";
import { Text, useColorModeValue } from "@chakra-ui/react";

interface IUserProfileAddress {
  userAddress: string;
}

const UserProfileAddress = ({ userAddress }: IUserProfileAddress) => {
  return (
    <Text
      textAlign="center"
      color={useColorModeValue("gray.700", "gray.400")}
      px={3}
    >
      {userAddress}
    </Text>
  );
};

export default UserProfileAddress;
