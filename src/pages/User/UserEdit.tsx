import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { UserTab, Transition } from "../../components";
import DefaultLayout from "../DefaultLayout";
import { getCurrentUserSelector } from "../../store/selectors/user.selector";

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  address: string;
}

const schema = yup.object().shape({
  name: yup.string().required("Your name is required!"),
  email: yup.string().email().required("Your email is required!"),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid!"
    ),
  address: yup.string().required("Your address is required!"),
});

const UserEdit = () => {
  const currentUser = useSelector(getCurrentUserSelector);
  const [toggleName, toggleNameButton] = useState(false);
  const [toggleEmail, toggleEmailButton] = useState(false);
  const [togglePhone, togglePhoneButton] = useState(false);
  const [toggleAddress, toggleAddressButton] = useState(false);

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
              <Link to="/user/:id/profile">
                <div className="flex">
                  <AiOutlineArrowLeft
                    color="#4169E1"
                    className="mx-2 text-3xl"
                  />
                  <Text color="#4169E1" className="mx-2 mb-10 text-lg">
                    Return to profile info
                  </Text>
                </div>
              </Link>

              <FormControl
                isInvalid={!!errors?.name?.message}
                isRequired
                py="10px"
              >
                <FormLabel>
                  User name: {currentUser.name}
                  <Button
                    onClick={() => toggleNameButton(!toggleName)}
                    h="30px"
                    mb="9px"
                    className="float-right"
                    bg="#4169E1"
                    color="white"
                    _hover={{
                      bg: "#153289",
                    }}
                  >
                    Edit
                  </Button>
                </FormLabel>
                <div
                  className="z-50 w-full duration-300 ease-in-out bg-white transition-height"
                  style={{ height: toggleName ? "60px" : 0 }}
                >
                  <ul
                    className="absolute list-none transition-opacity duration-300 ease-in-out z-500"
                    style={{ opacity: toggleName ? 1 : 0 }}
                  >
                    {" "}
                    <Input
                      {...register("name")}
                      placeholder="User Name"
                      _placeholder={{ color: "#777" }}
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.500")}
                      width="650px"
                    />
                    <FormErrorMessage>
                      <WarningTwoIcon /> {errors?.name?.message}
                    </FormErrorMessage>
                  </ul>
                </div>
              </FormControl>

              <FormControl
                isInvalid={!!errors?.email?.message}
                isRequired
                py="10px"
              >
                <FormLabel>
                  Email: {currentUser.email}
                  <Button
                    onClick={() => toggleEmailButton(!toggleEmail)}
                    h="30px"
                    mb="9px"
                    className="float-right"
                    bg="#4169E1"
                    color="white"
                    _hover={{
                      bg: "#153289",
                    }}
                  >
                    Edit
                  </Button>
                </FormLabel>
                <div
                  className="z-50 w-full duration-300 ease-in-out bg-white transition-height"
                  style={{ height: toggleEmail ? "60px" : 0 }}
                >
                  <ul
                    className="absolute list-none transition-opacity duration-300 ease-in-out z-500"
                    style={{ opacity: toggleEmail ? 1 : 0 }}
                  >
                    {" "}
                    <Input
                      {...register("email")}
                      placeholder="Email"
                      _placeholder={{ color: "#777" }}
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.500")}
                      width="650px"
                    />
                    <FormErrorMessage>
                      <WarningTwoIcon /> {errors?.email?.message}
                    </FormErrorMessage>
                  </ul>
                </div>
              </FormControl>
              <FormControl
                isInvalid={!!errors?.name?.message}
                isRequired
                py="10px"
              >
                <FormLabel>
                  Phone Number: {currentUser.phone}
                  <Button
                    onClick={() => togglePhoneButton(!togglePhone)}
                    h="30px"
                    mb="9px"
                    className="float-right"
                    bg="#4169E1"
                    color="white"
                    _hover={{
                      bg: "#153289",
                    }}
                  >
                    Edit
                  </Button>
                </FormLabel>
                <div
                  className="z-50 w-full duration-300 ease-in-out bg-white transition-height"
                  style={{ height: togglePhone ? "60px" : 0 }}
                >
                  <ul
                    className="absolute list-none transition-opacity duration-300 ease-in-out z-500"
                    style={{ opacity: togglePhone ? 1 : 0 }}
                  >
                    {" "}
                    <Input
                      {...register("phone")}
                      placeholder="Phone Number"
                      _placeholder={{ color: "#777" }}
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.500")}
                      width="650px"
                    />
                    <FormErrorMessage>
                      <WarningTwoIcon /> {errors?.phone?.message}
                    </FormErrorMessage>
                  </ul>
                </div>
              </FormControl>
              <FormControl
                isInvalid={!!errors?.address?.message}
                isRequired
                py="10px"
              >
                <FormLabel>
                  Address: {currentUser.address}
                  <Button
                    onClick={() => toggleAddressButton(!toggleAddress)}
                    h="30px"
                    mb="9px"
                    className="float-right"
                    bg="#4169E1"
                    color="white"
                    _hover={{
                      bg: "#153289",
                    }}
                  >
                    Edit
                  </Button>
                </FormLabel>
                <div
                  className="z-50 w-full duration-300 ease-in-out bg-white transition-height"
                  style={{ height: toggleAddress ? "60px" : 0 }}
                >
                  <ul
                    className="absolute list-none transition-opacity duration-300 ease-in-out z-500"
                    style={{ opacity: toggleAddress ? 1 : 0 }}
                  >
                    {" "}
                    <Input
                      {...register("address")}
                      placeholder="Adress"
                      _placeholder={{ color: "#777" }}
                      type="text"
                      bg={useColorModeValue("gray.50", "gray.500")}
                      width="650px"
                    />
                    <FormErrorMessage>
                      <WarningTwoIcon /> {errors?.address?.message}
                    </FormErrorMessage>
                  </ul>
                </div>
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
                  Edit
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
