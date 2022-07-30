import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import qs from "qs";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormHelperText,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
import { customAxios } from "../../http-common";
import { AuthFormGrid, Transition, StatusToaster } from "../../components";

interface IFormInputs {
  name: string;
  email: string;
  phone: number;
  pw1: string;
  pw2: string;
  isSubmitting: boolean;
}

const schema = yup.object().shape({
  name: yup.string().required("Your name is required!"),
  email: yup.string().email().required(),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid",
    ),
  pw1: yup.string().min(4).max(15).required(),
  pw2: yup.string().oneOf([yup.ref("pw1"), null], "Passwords do not match!"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "all",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: IFormInputs) => {
    return customAxios
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
                <FormControl isInvalid={!!errors?.name?.message} isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    {...register("name")}
                    placeholder="Enter name"
                    size="md"
                    type="text"
                    name="name"
                  />
                  <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email?.message} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    {...register("email")}
                    placeholder="Enter email"
                    size="md"
                    name="email"
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.phone?.message} isRequired>
                  <FormLabel>Phone</FormLabel>
                  <Input
                    {...register("phone")}
                    placeholder="Enter phone"
                    size="md"
                    type="tel"
                    name="phone"
                  />
                  <FormErrorMessage>{errors?.phone?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.pw1?.message}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    {...register("pw1")}
                    pr="4.5rem"
                    type="password"
                    placeholder="Enter password"
                    name="pw1"
                  />
                  <FormErrorMessage>{errors?.pw1?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.pw2?.message}>
                  <FormLabel>Confirm Password</FormLabel>
                  <Input
                    {...register("pw2")}
                    pr="4.5rem"
                    type="password"
                    placeholder="Confirm password"
                    name="pw2"
                  />
                  <FormErrorMessage>{errors?.pw2?.message}</FormErrorMessage>
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
                  disabled={
                    !!errors.email ||
                    !!errors.name ||
                    !!errors.phone ||
                    !!errors.pw1 ||
                    !!errors.pw2
                  }
                >
                  Log In
                </Button>

                <Box>
                  Already had an account?
                  <Link color="brand.500" href="/login">
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
