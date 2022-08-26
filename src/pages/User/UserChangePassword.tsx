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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
            <Link to="/user/change-password/" onClick={onOpen}>
              <div className="flex">
                <AiOutlineArrowLeft color="#4169E1" className="mx-2 text-3xl" />
                <Text color="#4169E1" className="mx-2 mb-10 text-lg">
                  Return to profile info
                </Text>
              </div>
            </Link>

            <FormControl isInvalid={!!errors?.password?.message} py="10px">
              <FormLabel>Enter your current password:</FormLabel>
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
              <FormLabel>Enter your new password:</FormLabel>
              <Input
                {...register("changePassword")}
                placeholder="New"
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
              <FormLabel>Retype your new password:</FormLabel>
              <Input
                {...register("retypeChangePassword")}
                placeholder="Retype your password"
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
                Confirm
              </Button>
            </Stack>
          </form>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <div className="text-center justify-center p-[10%]">
              <p className="pb-8 text-3xl font-bold">
                You have unsaved changes
              </p>
              <p>Are you sure you want to leave</p>
            </div>
            <ModalFooter className="flex text-center align-center">
              <Button
                colorScheme="blue"
                mr={3}
                onClick={onClose}
                className="w-1/2"
              >
                Stay
              </Button>
              <Button type="submit" colorScheme="red" mr={3} className="w-1/2">
                Leave
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </DefaultLayout>
  );
};

export default UserChangePassword;
