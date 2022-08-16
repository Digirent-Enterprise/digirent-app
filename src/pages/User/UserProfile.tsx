import React from "react";
import {
  Box,
  Center,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

import { UserTab } from "../../components";
import {
  UserProfileAddress,
  UserProfileAvatar,
  UserProfileButton,
  UserProfileEmail,
  UserProfileName,
} from "../../components/elements";
import DefaultLayout from "../DefaultLayout";

const UserProfile = () => {
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
            <UserProfileName userName="Vo Thanh Luan" />
            <UserProfileEmail userEmail="vothanhluan0811@gmail.com" />
            <UserProfileAddress userAddress="166 Ngo Si lien st." />
            <Stack
              mt={8}
              direction="row"
              spacing={4}
              alignContent="center"
              justifyContent="center"
            >
              <UserProfileButton
                directUrl="/"
                userButtonItem="Change your password"
              />
              <UserProfileButton directUrl="/user/:id/edit" userButtonItem="Edit" />
            </Stack>
            <Stack
              mt={8}
              direction="row"
              spacing={4}
              alignContent="center"
              justifyContent="center"
            >
              <UserProfileButton
                directUrl="/"
                userButtonItem="View your Information"
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
