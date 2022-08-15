import React from "react";
import * as yup from "yup";
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
import { yupResolver } from "@hookform/resolvers/yup";
import DefaultLayout from "../DefaultLayout";
import { UserTab, Transition } from "../../components";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

interface IFormInputs {
  name: string;
  phone: string;
  address: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Your name is required!"),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid!"
    ),
  address: yup.string().required("Your address is required!"),
});

const UserEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInputs) => console.log(data);
  return (
    <DefaultLayout>
      <Transition>
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
              <FormControl className="flex justify-center items-center">
                <FormLabel fontSize="3xl" mb="30px" className="p-auto">
                  <Text>Edit Your Profile</Text>
                </FormLabel>
              </FormControl>

              <Link to="/user/:id/profile">
                <div className="flex">
                  <AiOutlineArrowLeft
                    color="#4169E1"
                    className="mx-2 text-3xl"
                  />
                  <Text color="#4169E1" className="mb-1 mx-2 text-lg">
                    Return to profile infos
                  </Text>
                </div>
              </Link>

              <FormControl
                isInvalid={!!errors?.name?.message}
                isRequired
                py="10px"
              >
                <FormLabel>User name</FormLabel>
                <Input
                  {...register("name")}
                  placeholder="User Name"
                  _placeholder={{ color: "#777" }}
                  type="text"
                  bg={useColorModeValue("gray.50", "gray.500")}
                />
                <FormErrorMessage>
                  <WarningTwoIcon /> {errors?.name?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!errors?.phone?.message}
                isRequired
                py="10px"
              >
                <FormLabel>Phone Number</FormLabel>
                <Input
                  {...register("phone")}
                  placeholder="Phone Number"
                  _placeholder={{ color: "#777" }}
                  type="phone"
                  bg={useColorModeValue("gray.50", "gray.500")}
                />
                <FormErrorMessage>
                  <WarningTwoIcon /> {errors?.phone?.message}
                </FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={!!errors?.address?.message}
                isRequired
                py="10px"
              >
                <FormLabel>Address</FormLabel>
                <Input
                  {...register("address")}
                  placeholder="Your address"
                  _placeholder={{ color: "#777" }}
                  type="address"
                  bg={useColorModeValue("gray.50", "gray.500")}
                />
                <FormErrorMessage>
                  <WarningTwoIcon /> {errors?.address?.message}
                </FormErrorMessage>
              </FormControl>
              <Stack
                spacing={6}
                direction={["column", "row"]}
                py="20px"
                className="flex justify-center items-center"
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
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </Transition>
    </DefaultLayout>
  );
};

export default UserEdit;
