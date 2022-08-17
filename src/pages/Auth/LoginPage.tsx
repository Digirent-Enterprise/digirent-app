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

import { toast } from "react-toastify";

import { storeUserSession } from "../../helpers/authHelpers";
import { AuthFormGrid, Transition } from "../../components";
import { customAxios } from "../../http-common";
import { getUserDetail } from "../../store/actions/user.action";
import Helmet from "../../Helmet";
import { useState } from "react";

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
  const [disable, setDisable] = useState(false);
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
  const onSubmit = (data: IFormInputs, event: any) => {
    setDisable(true);
    event.preventDefault();
    customAxios("application/json")
      .post("auth/login", data)
      .then((res: any) => {
        if (res.status === 200 || res.status === 201) {
          storeUserSession(res.data.accessToken);
          dispatch(getUserDetail());
          toast.success("You have successfully logged in!", {
            theme: "dark",
            icon: "🚀",
          });
          navigate("/");
        } else {
          toast.warning(`error, failed to login!`, {
            theme: "dark",
          });
          setDisable(false);
        }
      })
      .catch((error: any) => {
        setDisable(false);
        toast.warning(`${error.response.data} error, failed to login!`, {
          theme: "dark",
        });
      });
  };

  return (
    <Transition>
      <Helmet
        title="Login"
        addPostfixTitle
        description="Login to your existing account at Digirent"
      />
      <AuthFormGrid
        childTitle="Login to your account"
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
                  disabled={!!errors.email || !!errors.password || disable}
                >
                  Login
                </Button>

                <Box>
                  New to us?
                  <Link color="brand.500" href="/register">
                    {" "}
                    Register
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
