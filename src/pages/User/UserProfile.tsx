import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Center,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconContext } from "react-icons";
import { BsKey } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineProfile } from "react-icons/ai";
import { TbHeartOff } from "react-icons/tb";
import { UserTab } from "../../components";
import {
  UserProfileAddress,
  UserProfileAvatar,
  UserProfileButton,
  UserProfileEmail,
  UserProfileName,
} from "../../components/elements";
import DefaultLayout from "../DefaultLayout";
import { getCurrentUserSelector } from "../../store/selectors/user.selector";

const UserProfile = () => {
  const currentUser = useSelector(getCurrentUserSelector);
  return (
    <DefaultLayout>
      <Box>
        <UserTab />

        <Center py={6}>
          <Box
            w="full"
            maxH="900px"
            h="full"
            bg={useColorModeValue("white", "gray.900")}
            rounded="lg"
            p={6}
            textAlign="center"
          >
            <UserProfileAvatar />
            <UserProfileName userName={currentUser.name} />
            <UserProfileEmail userEmail={currentUser.email} />
            <UserProfileAddress userAddress="Ho Chi Minh city" />
            <Stack
              mt={8}
              direction="row"
              spacing={4}
              alignContent="center"
              justifyContent="center"
            >
              <UserProfileButton
                directUrl="/user/change-password"
                userButtonItem="Change your password"
                leftIcon={<BsKey />}
              />
              <UserProfileButton
                directUrl="/user/edit-my-profile"
                userButtonItem="Edit"
                leftIcon={<AiOutlineEdit />}
              />
            </Stack>
            <Stack
              mt={1}
              direction="row"
              spacing={4}
              alignContent="center"
              justifyContent="center"
            >
              <UserProfileButton
                directUrl="/user/view-my-profile"
                userButtonItem="View your information"
                leftIcon={<AiOutlineProfile />}
              />
            </Stack>
            <Stack
              mt={4}
              direction="row"
              spacing={4}
              alignContent="center"
              justifyContent="center"
              pt="15px"
            >
              <Button
                flex={1}
                maxW="300px"
                fontSize="sm"
                rounded="full"
                alignItems="center"
                bg="#FF385C"
                color="white"
                _hover={{
                  bg: "#AE1010",
                }}
              >
                <IconContext.Provider
                  value={{
                    style: { verticalAlign: "middle", color: "white" },
                    size: "25px",
                    className: "global-class-name",
                  }}
                >
                  <div className="pr-2">
                    <TbHeartOff />
                  </div>
                </IconContext.Provider>
                Deactivate account
              </Button>
            </Stack>
          </Box>
        </Center>
      </Box>
    </DefaultLayout>
  );
};

export default UserProfile;
