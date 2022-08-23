import React from "react";
import { useSelector } from "react-redux";
import { Avatar,Text } from "@chakra-ui/react";
import { getCurrentUserSelector } from "../../../store/selectors/user.selector";
import { IMAGES } from "../../../utils/constants/image.constant";
import AiOutlineCamera from "react-icons/ai"

const UserProfileAvatar = () => {
  const currentUser = useSelector(getCurrentUserSelector);

  return (
    <Avatar
      boxSize="350px"
      src={currentUser.avatar ? currentUser.avatar : IMAGES.defaultAvatar}
      mb={4}
      pos="relative"
      className="overflow-hidden"
    >
      <div className="opacity-50 hover:opacity-78 hover:bg-[#222] absolute bottom-0 outline-none w-full h-20 box-border pr-32 cursor-pointer duration-500 z-30">
        <input
          type="file"
          className="opacity-0 bg-transparent relative bottom-0 outline-none z-30 w-80 h-24 box-border cursor-pointer"
        ></input>
      </div>
      {/* <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
        Dwayne
      </div> */} 
    </Avatar>
  );
};

export default UserProfileAvatar;
