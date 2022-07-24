import { useState } from "react";
import { useForm } from "react-hook-form";
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
import AuthFormGrid from "../../components/form/LoginForm/AuthFormGrid";

interface IFormInputs {
  username: string;
  pw1: string;
  pw2: string;
  email: string;
  phone: number;
  isSubmitting: boolean;
}

function LoginPage() {
  const [show, setShow] = useState<boolean>(false);

  const handleShowPassword = () => setShow(!show);

  const { register, handleSubmit } = useForm<IFormInputs>();

  const onSubmit = (data: IFormInputs) => {
    console.log(data);
  };

  return (
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
                  {...register("username")}
                  placeholder="supernam"
                  size="md"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  {...register("email")}
                  placeholder="supernam"
                  size="md"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Phone</FormLabel>
                <Input
                  {...register("phone")}
                  placeholder="supernam"
                  size="md"
                />
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
                    <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
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
                New to us?{" "}
                <Link color="brand.500" href="/register">
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
