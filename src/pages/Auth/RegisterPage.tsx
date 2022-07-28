import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  FormHelperText,
  Link,
} from "@chakra-ui/react";
import axios from "../../http-common";
import { AuthFormGrid } from "../../components/form/index";
import { Transition } from "../../components/elements";
import { StatusToaster } from "../../components/toaster/index";

interface IFormInputs {
  name: string;
  email: string;
  phone: number;
  pw1: string;
  pw2: string;
  isSubmitting: boolean;
}

const LoginPage = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleShowPassword = () => setShow(!show);
  const { register, handleSubmit } = useForm<IFormInputs>();
  const navigate = useNavigate();

  const onSubmit = (data: IFormInputs) => {
    return axios("application/x-www-form-urlencoded")
      .post("api/auth/register", qs.stringify(data))
      .then((res) => {
        if (res.status === 201) {
          <StatusToaster
            childCompStatusColor="success"
            childCompToasterTitle="Account created!"
            childCompToasterDescription="Your information has been registered successfully with us!"
          />;
          navigate("/login");
        } else {
          <StatusToaster
            childCompStatusColor="warning"
            childCompToasterTitle={`Failed to register, error code ${res.status}`}
            childCompToasterDescription={`${res.statusText} error has happened while creating your account!`}
          />;
        }
      });
  };

  return (
    <Transition>
      <AuthFormGrid
        childTitle="Register your account"
        childCompForm={
          <Box textAlign="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack
                spacing={4}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="md"
              >
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    {...register("name")}
                    placeholder="supernam"
                    size="md"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input {...register("email")} placeholder="email" size="md" />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input {...register("phone")} placeholder="phone" size="md" />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      {...register("pw1")}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleShowPassword}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <FormControl>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup size="md">
                    <Input
                      {...register("pw2")}
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Enter password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleShowPassword}
                      >
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormHelperText textAlign="right">
                    <Link href="/forgot-password">forgot password?</Link>
                  </FormHelperText>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="brand"
                  width="full"
                >
                  Log In
                </Button>

                <Box>
                  Already had an account?
                  <Link color="brand.500" href="/register">
                    Sign In
                  </Link>
                </Box>
              </Stack>
            </form>
          </Box>
        }
        childCompSideContent="https://i.pinimg.com/originals/a5/92/23/a59223a81638be37d096fcfa72d7dd48.jpg"
      />
    </Transition>
  );
};

export default LoginPage;
