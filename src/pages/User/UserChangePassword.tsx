import React from "react";
import { useTranslation } from "react-i18next";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import qs from "qs";
import { toast } from "react-toastify";
import { UserTab } from "../../components";
import DefaultLayout from "../DefaultLayout";
import { customAxios } from "../../http-common";
import Helmet from "../../Helmet";

interface IFormInputs {
  password: string;
  changePassword: string;
  retypeChangePassword: string;
}

const schema = yup.object().shape({
  password: yup.string().required("Please enter your password!"),
  changePassword: yup
    .string()
    .min(8, "Your password must be at least 8 characters!")
    .max(15)
    .required("Please enter your new password!"),
  retypeChangePassword: yup
    .string()
    .oneOf([yup.ref("changePassword"), null], "Your passwords do not match!")
    .required("Please retype your password!"),
});

const UserChangePassword = () => {
  const { t } = useTranslation();
  const { onOpen } = useDisclosure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const onSubmit = async (data: IFormInputs) => {
    const newMappingObj = {
      currentPassword: data.password,
      newPassword: data.changePassword,
    };
    const update = await customAxios()
      .put("auth/reset-password", qs.stringify(newMappingObj))
      .catch((e) => {
        toast.error(`Error: ${e.response.data}`, { theme: "dark" });
      });
    if (update && update.data) {
      toast.success("Change password successfully!", {
        theme: "dark",
        icon: "🚀",
      });
    }
  };

  return (
    <DefaultLayout>
      <UserTab index={0} />
      <Helmet
        title={t("UserChangePassHelmetTitle")}
        addPostfixTitle
        description={t("UserChangePassHelmetDes")}
      />
      <Flex minH="70vh" align="center" justify="center" bg="#fff">
        <Box
          w="full"
          maxW="700px"
          bg={useColorModeValue("#fff", "#777")}
          rounded="xl"
          p={6}
          my={12}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link to="/user/change-password" onClick={onOpen}>
              <div className="flex">
                <AiOutlineArrowLeft color="#4169E1" className="mx-2 text-3xl" />
                <Text color="#4169E1" className="mx-2 mb-10 text-lg">
                  {t("ReturnToProfile")}
                </Text>
              </div>
            </Link>

            <FormControl isInvalid={!!errors?.password?.message} py="10px">
              <FormLabel>{t("CurPass")}</FormLabel>
              <Input
                {...register("password")}
                placeholder={t("CurPass")}
                _placeholder={{ color: "#777" }}
                type="password"
                bg={useColorModeValue("gray.50", "gray.500")}
                width="650px"
              />
              <FormErrorMessage>
                <WarningTwoIcon /> {errors?.password?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!errors?.changePassword?.message}
              py="10px"
            >
              <FormLabel>{t("NewPass")}</FormLabel>
              <Input
                {...register("changePassword")}
                placeholder={t("NewPass")}
                _placeholder={{ color: "#777" }}
                type="password"
                bg={useColorModeValue("gray.50", "gray.500")}
                width="650px"
              />
              <FormErrorMessage>
                <WarningTwoIcon /> {errors?.changePassword?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl
              isInvalid={!!errors?.retypeChangePassword?.message}
              py="10px"
            >
              <FormLabel>{t("ConfirmNewPass")}</FormLabel>
              <Input
                {...register("retypeChangePassword")}
                placeholder={t("ConfirmNewPass")}
                _placeholder={{ color: "#777" }}
                type="password"
                bg={useColorModeValue("gray.50", "gray.500")}
                width="650px"
              />
              <FormErrorMessage>
                <WarningTwoIcon /> {errors?.retypeChangePassword?.message}
              </FormErrorMessage>
            </FormControl>

            <Stack
              spacing={6}
              direction={["column", "row"]}
              py="20px"
              className="flex"
            >
              <Button
                bg="#4169E1"
                color="white"
                w="50%"
                _hover={{
                  bg: "#153289",
                }}
                type="submit"
              >
                {t("Confirm")}
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </DefaultLayout>
  );
};

export default UserChangePassword;
