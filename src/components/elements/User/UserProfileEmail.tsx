import React from "react";
import { Text } from "@chakra-ui/react";

interface IUserProfileEmail {
  userEmail: string;
}

const UserProfileEmail = ({ userEmail }: IUserProfileEmail) => {
  return (
    <Text fontWeight={600} color="gray.500" mb={4}>
      {userEmail}
    </Text>
  );
};

export default UserProfileEmail;
