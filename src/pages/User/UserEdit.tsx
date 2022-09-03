import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
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
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { AiOutlineWarning, AiOutlineArrowLeft } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import qs from "qs";
import { toast } from "react-toastify";
import { WarningTwoIcon } from "@chakra-ui/icons";
import { UserTab } from "../../components";
import DefaultLayout from "../DefaultLayout";
import { getCurrentUserSelector } from "../../store/selectors/user.selector";
import { customAxios } from "../../http-common";
import { getUserDetail } from "../../store/actions/user.action";

interface IFormInputs {
  name: string;
  email: string;
  phone: string;
  location: string;
}

const schema = yup.object().shape({
  name: yup.string(),
  email: yup.string().email(),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid!",
    ),
  location: yup.string(),
});

const UserEdit = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(getCurrentUserSelector);
  const [toggleName, toggleNameButton] = useState(false);
  const [toggleEmail, toggleEmailButton] = useState(false);
  const [togglePhone, togglePhoneButton] = useState(false);
  const [toggleLocation, toggleLocationButton] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCancel = () => {
    navigate("/user/my-profile");
  };

  const onSubmit = async (data: IFormInputs) => {
    await customAxios()
      .put("user/edit-user", qs.stringify(data))
      .then((res) => {
        if (res.status === 200 || res.status === 201) {
          dispatch(getUserDetail());
          toast.success("Edit account successfully!", {
            theme: "dark",
            icon: "🚀",
          });
        }
      })
      .catch((error: any) => {
        toast.warning(
          `${error.response.data} error, failed to edit your account!`,
          {
            theme: "dark",
          },
        );
      })
      .finally(() => {
        navigate("/user/my-profile");
      });
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
            <Link to="/user/my-profile" onClick={onOpen}>
              <div className="flex">
                <AiOutlineArrowLeft color="#4169E1" className="mx-2 text-3xl" />
                <Text color="#4169E1" className="mx-2 mb-10 text-lg">
                  {t("ReturnToProfile")}
                </Text>
              </div>
            </Link>

            <FormControl isInvalid={!!errors?.name?.message} py="10px">
              <FormLabel>
                {t("Username")}: {currentUser.name}
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
                  {t("Edit")}
                </Button>
              </FormLabel>
              <div
                className="z-50 w-full mt-5 duration-300 ease-in-out bg-white transition-height"
                style={{ height: toggleName ? "60px" : 0 }}
              >
                <ul
                  className="absolute z-50 list-none transition-opacity duration-300 ease-in-out"
                  style={{ opacity: toggleName ? 1 : 0 }}
                >
                  {" "}
                  <Input
                    {...register("name")}
                    defaultValue={currentUser.name}
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

            <FormControl isInvalid={!!errors?.email?.message} py="10px">
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
                  {t("Edit")}
                </Button>
              </FormLabel>
              <div
                className="z-50 w-full mt-5 duration-300 ease-in-out bg-white transition-height"
                style={{ height: toggleEmail ? "60px" : 0 }}
              >
                <ul
                  className="absolute z-50 list-none transition-opacity duration-300 ease-in-out"
                  style={{ opacity: toggleEmail ? 1 : 0 }}
                >
                  {" "}
                  <Input
                    {...register("email")}
                    defaultValue={currentUser.email}
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
            <FormControl isInvalid={!!errors?.name?.message} py="10px">
              <FormLabel>
                {t("PhoneNum")}: {currentUser.phone}
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
                  {t("Edit")}
                </Button>
              </FormLabel>
              <div
                className="z-50 w-full mt-5 duration-300 ease-in-out bg-white transition-height"
                style={{ height: togglePhone ? "60px" : 0 }}
              >
                <ul
                  className="absolute z-50 list-none transition-opacity duration-300 ease-in-out"
                  style={{ opacity: togglePhone ? 1 : 0 }}
                >
                  {" "}
                  <Input
                    {...register("phone")}
                    defaultValue={currentUser.phone}
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
            <FormControl isInvalid={!!errors?.location?.message} py="10px">
              <FormLabel>
                {t("Address")}: {currentUser.location}
                <Button
                  onClick={() => toggleLocationButton(!toggleLocation)}
                  h="30px"
                  mb="9px"
                  className="float-right"
                  bg="#4169E1"
                  color="white"
                  _hover={{
                    bg: "#153289",
                  }}
                >
                  {t("Edit")}
                </Button>
              </FormLabel>
              <div
                className="z-50 w-full mt-5 duration-300 ease-in-out bg-white transition-height"
                style={{ height: toggleLocation ? "60px" : 0 }}
              >
                <ul
                  className="absolute z-50 list-none transition-opacity duration-300 ease-in-out"
                  style={{ opacity: toggleLocation ? 1 : 0 }}
                >
                  {" "}
                  <Input
                    defaultValue={currentUser.location}
                    {...register("location")}
                    placeholder="Location"
                    _placeholder={{ color: "#777" }}
                    type="text"
                    bg={useColorModeValue("gray.50", "gray.500")}
                    width="650px"
                  />
                  <FormErrorMessage>
                    <WarningTwoIcon /> {errors?.location?.message}
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
                bg="grey"
                color="white"
                w="50%"
                _hover={{
                  bg: "#153289",
                }}
                onClick={onCancel}
              >
                {t("Cancel")}
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
                {t("Confirm")}
              </Button>
            </Stack>
          </form>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <div className="text-center justify-center p-[10%]">
              <IconContext.Provider value={{ className: "w-10 h-10" }}>
                <div className="text-[#FACC15] flex justify-center mb-5">
                  <AiOutlineWarning />
                </div>
              </IconContext.Provider>
              <p className="pb-8 text-3xl font-bold">
                You have unsaved changes
              </p>
              <p>Are you sure you want to leave ?</p>
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

export default UserEdit;
