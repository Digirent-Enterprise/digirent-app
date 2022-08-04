import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
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
import { storeUserSession } from "../../helpers/authHelpers";
import { AuthFormGrid, Transition, StatusToaster } from "../../components";

import { customAxios } from "../../http-common";
import { getUserDetail } from "../../store/actions/user.action";

interface IFormInputs {
  email: string;
  password: string;
  isSubmitting: boolean;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

const LoginPage = () => {
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
  const onSubmit = (data: IFormInputs) => {
    customAxios("application/json")
      .post("auth/login", data)
      .then((res: any) => {
        if (res.status === 200 || res.status === 201) {
          storeUserSession(res.data.accessToken);
          dispatch(getUserDetail());
          <StatusToaster
            childCompToasterTitle="Welcome back!"
            childCompStatusColor="success"
            childCompToasterDescription="You have successfully logged in!"
          />;
          navigate("/");
        } else {
          <StatusToaster
            childCompStatusColor="warning"
            childCompToasterTitle={`Fail to log you in, error ${res.status}.`}
            childCompToasterDescription={`${res.statusText}`}
          />;
        }
      });
  };

  return (
    <Transition>
      <AuthFormGrid
        childTitle="Log in to your account"
        childCompForm={
          <Box textAlign="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
                <FormControl isInvalid={!!errors?.email?.message} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...register("email")}
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    size="md"
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={!!errors?.password?.message} isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    {...register("password")}
                    name="password"
                    size="md"
                    type="password"
                    placeholder="Enter your password"
                  />
                  <FormErrorMessage>
                    {errors?.password?.message}
                  </FormErrorMessage>
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
                  disabled={!!errors.email || !!errors.password}
                >
                  Login
                </Button>

                <Box>
                  New to us?
                  <Link color="brand.500" href="/register">
                    {" "}
                    Sign Up
                  </Link>
                </Box>
              </Stack>
            </form>
          </Box>
        }
        childCompSideContent="https://i.pinimg.com/originals/a5/92/23/a59223a81638be37d096fcfa72d7dd48.jpg"
        childOAuthButtonsVisibility
      />
    </Transition>
  );
};

export default LoginPage;
