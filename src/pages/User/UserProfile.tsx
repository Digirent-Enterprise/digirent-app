import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Box, Center, Stack, useColorModeValue } from "@chakra-ui/react";
import { BsKey } from "react-icons/bs";
import { AiOutlineEdit, AiOutlineProfile } from "react-icons/ai";
import { UserTab } from "../../components";
import {
  UserProfileAddress,
  UserProfileAvatar,
  UserProfileButton,
  UserProfileDeactivateButton,
  UserProfileEmail,
  UserProfileName,
} from "../../components/elements";
import DefaultLayout from "../DefaultLayout";
import { getCurrentUserSelector } from "../../store/selectors/user.selector";
import Helmet from "../../Helmet";

const UserProfile = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(getCurrentUserSelector);
  return (
    <DefaultLayout>
      <Helmet
        title={t("UserProfileHelmetTitle")}
        addPostfixTitle
        description={t("UserProfileHelmetDes")}
      />
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
                userButtonItem={t("ChangePassword")}
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
                userButtonItem={t("ViewYourInfo")}
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
              <UserProfileDeactivateButton />
            </Stack>
          </Box>
        </Center>
      </Box>
    </DefaultLayout>
  );
};

export default UserProfile;
