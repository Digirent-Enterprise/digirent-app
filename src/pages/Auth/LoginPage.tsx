import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
import { storeUserSession } from "../../helpers/authHelpers";
import AuthFormGrid from "../../components/form/AuthForm/AuthFormGrid";
import { SuccessToaster, FailedToaster } from "../../components/toaster/index";

interface IFormInputs {
  email: string;
  password: string;
  isSubmitting: boolean;
}

function LoginPage() {
  const [show, setShow] = useState<boolean>(false);
  const handleShowPassword = () => setShow(!show);
  const { register, handleSubmit } = useForm<IFormInputs>();
  const navigate = useNavigate();

  const onSubmit = (data: IFormInputs) => {
    axios( "application/x-www-form-urlencoded").post("auth/login", data).then((res) => {
      if (res.status === 201) {
        <SuccessToaster
          childCompToasterTitle="Welcome back!"
          childCompToasterDescription="You have successfully logged in!"
        />;
        storeUserSession(res.data.accessToken);
        navigate("/");
      } else {
        <FailedToaster
          childCompToasterTitle={`Fail to log you in, error ${res.status}.`}
          childCompToasterDescription={`${res.statusText}`}
        />;
      }
    });
  };

  return (
    <AuthFormGrid
      childTitle="Log your account"
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
                <FormLabel>Email</FormLabel>
                <Input
                  {...register("email")}
                  placeholder="Enter email"
                  size="md"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    {...register("password")}
                    pr="4.5rem"
                    type={show ? "text" : "password"}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
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
                New to us?
                <Link color="brand" href="/register">
                  Sign Up
                </Link>
              </Box>
            </Stack>
          </form>
        </Box>
      }
      childCompSideContent="https://i.pinimg.com/originals/a5/92/23/a59223a81638be37d096fcfa72d7dd48.jpg"
    />
  );
}

export default LoginPage;
