import React from "react";
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
import { WarningTwoIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import qs from "qs";
import { toast } from "react-toastify";
import { UserTab } from "../../components";
import DefaultLayout from "../DefaultLayout";
import { customAxios } from "../../http-common";

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/user/my-profile");
  };

  const onSubmit = async (data: IFormInputs) => {
    const update = await customAxios().put(
      "user/edit-user",
      qs.stringify(data),
    );
    if (update.data) {
      toast.success("Change password successfully!", {
        theme: "dark",
        icon: "🚀",
      });
    }
  };

  return (
    <DefaultLayout>
      <UserTab />
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
            <Link to="/user/my-profile">
              <div className="flex">
                <AiOutlineArrowLeft color="#4169E1" className="mx-2 text-3xl" />
                <Text color="#4169E1" className="mx-2 mb-10 text-lg">
                  Return to profile info
                </Text>
              </div>
            </Link>

            <FormControl isInvalid={!!errors?.password?.message} py="10px">
              <FormLabel>Current password</FormLabel>
              <Input
                {...register("password")}
                placeholder="Current password"
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
              <FormLabel>New password</FormLabel>
              <Input
                {...register("changePassword")}
                placeholder="New password"
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
              <FormLabel>Retype new password</FormLabel>
              <Input
                {...register("retypeChangePassword")}
                placeholder="Retype new password"
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
                bg="grey"
                color="white"
                w="50%"
                _hover={{
                  bg: "#153289",
                }}
                onClick={onCancel}
              >
                Cancel
              </Button>
              <Button
                bg="#4169E1"
                color="white"
                w="50%"
                _hover={{
                  bg: "#153289",
                }}
                type="submit"
              >
                Confirm
              </Button>
            </Stack>
          </form>
        </Box>
      </Flex>
    </DefaultLayout>
  );
};

export default UserChangePassword;
