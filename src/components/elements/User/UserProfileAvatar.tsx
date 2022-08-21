import React from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@chakra-ui/react";
import { getCurrentUserSelector } from "../../../store/selectors/user.selector";
import { IMAGES } from "../../../utils/constants/image.constant";

const UserProfileAvatar = () => {
  const currentUser = useSelector(getCurrentUserSelector);
  return (
    <Avatar
      boxSize="350px"
      src={currentUser.avatar ? currentUser.avatar : IMAGES.defaultAvatar}
      mb={4}
      pos="relative"
    />
  );
};

export default UserProfileAvatar;
