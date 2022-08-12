import React from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { UserTab, Transition } from "../../components";


const UserEdit = () => {
  return (
    <Transition>
      <UserTab />
      <Flex
        minH="78vh"
        align="center"
        justify="center"
        bg={useColorModeValue("gray.50", "gray.500")}
      >
        <Stack
          spacing={4}
          w="full"
          maxW="md"
          bg={useColorModeValue("white", "gray.700")}
          rounded="xl"
          p={6}
          my={12}
        >
          <FormControl>
            <FormLabel fontSize="3xl">Your Infos</FormLabel>
          </FormControl>
          <FormControl id="userName" isRequired>
            <FormLabel>User name</FormLabel>
            <Input
              placeholder="UserName"
              _placeholder={{ color: "gray.500" }}
              type="text"
            />
          </FormControl>
          <FormControl id="phone" isRequired>
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="Phone Number"
              _placeholder={{ color: "gray.500" }}
              type="phone"
            />
          </FormControl>
          <FormControl id="address" isRequired>
            <FormLabel>Address</FormLabel>
            <Input
              placeholder="address"
              _placeholder={{ color: "gray.500" }}
              type="address"
            />
          </FormControl>
          <Stack spacing={6} direction={["column", "row"]}>
            <Button
              bg="red.400"
              color="white"
              w="full"
              _hover={{
                bg: "red.500",
              }}
            >
              Cancel
            </Button>
            <Button
              bg="blue.400"
              color="white"
              w="full"
              _hover={{
                bg: "blue.500",
              }}
            >
              Submit
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </Transition>
  );
};

export default UserEdit;
