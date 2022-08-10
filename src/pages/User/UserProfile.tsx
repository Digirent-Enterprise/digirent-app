import React from "react";
import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Transition } from "../../components/elements";
import { UserTab } from "../../components";
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
            <Avatar
              boxSize="350px"
              src="https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              mb={4}
              pos="relative"
            />
            <Heading fontSize="2xl" fontFamily="body">
              Vo Thanh Luan
            </Heading>
            <Text fontWeight={600} color="gray.500" mb={4}>
              vothanhluan@gmail.com
            </Text>
            <Text
              textAlign="center"
              color={useColorModeValue("gray.700", "gray.400")}
              px={3}
            >
              Hi, this is a Description.
            </Text>
            <Stack
              mt={8}
              direction="row"
              spacing={4}
              alignContent="center"
              justifyContent="center"
            >
              <Button
                flex={1}
                fontSize="sm"
                maxW="250px"
                rounded="full"
                bg="blue.400"
                color="white"
                boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Change Password
              </Button>
              <Button
                flex={1}
                fontSize="sm"
                maxW="250px"
                rounded="full"
                bg="blue.400"
                color="white"
                boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                Edit
              </Button>
            </Stack>
            <Stack
              mt={8}
              direction="row"
              spacing={4}
              alignContent="center"
              justifyContent="center"
            >
              <Button
                flex={1}
                fontSize="sm"
                maxW="250px"
                rounded="full"
                bg="blue.400"
                color="white"
                boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
              >
                View your infomations
              </Button>
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
                bg="red.400"
                color="white"
                boxShadow="0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                _hover={{
                  bg: "red.500",
                }}
                _focus={{
                  bg: "blue.500",
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
