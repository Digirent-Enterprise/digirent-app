import React from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Center,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
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
            maxW="1400px"
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
                directUrl="/user/:id/change-password"
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
              mt={8}
              direction="row"
              spacing={4}
              alignContent="center"
              justifyContent="center"
            >
              <UserProfileButton
                directUrl="/user/:id/view"
                userButtonItem="View your information"
                leftIcon={<AiOutlineProfile />}
              />
            </Stack>
            <Stack
              mt={8}
              direction="row"
              spacing={4}
              alignContent="center"
              justifyContent="center"
              pt="15px"
            >
              <Button
                flex={1}
                maxW="450px"
                fontSize="sm"
                rounded="full"
                alignItems="center"
                bg="#FF385C"
                color="white"
                boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                _hover={{
                  bg: "#AE1010",
                }}
                leftIcon={<TbHeartOff />}
              >
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
