import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  // FormHelperText,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
// import { customAxios } from "../../http-common";
import { AuthFormGrid, Transition } from "../../components";
import { getEmailFromState } from "../../store/selectors/user.selector";
import { saveEmail } from "../../store/actions/user.action";

interface IFormInputs {
  email: string;
  isSubmitting: boolean;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const emailState = useSelector(getEmailFromState);

  const [email, setEmail] = useState(emailState);

  useEffect(() => {
    if (email) {
      dispatch(saveEmail());
      setEmail(email);
    }
  }, []);
  // const navigate = useNavigate();

  const onSubmit = (data: IFormInputs) => {
    // axios("application/x-www-form-urlencoded")
    //   .post("auth/login", data)
    //   .then((res) => {s
    //     if (res.status === 201) {
    //       <StatusToaster
    //         childCompToasterTitle="Welcome back!"
    //         childCompStatusColor="success"
    //         childCompToasterDescription="You have successfully logged in!"
    //       />;
    //       storeUserSession(res.data.accessToken);
    //       navigate("/");
    //     } else {
    //       <StatusToaster
    //         childCompStatusColor="warning"
    //         childCompToasterTitle={`Fail to log you in, error ${res.status}.`}
    //         childCompToasterDescription={`${res.statusText}`}
    //       />;
    //     }
    //   });
    alert(data);
  };

  return (
    <Transition>
      <AuthFormGrid
        childTitle="Forgot Password"
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>

                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="brand"
                  width="full"
                  disabled={!!errors.email}
                >
                  Reset
                </Button>

                <Box>
                  Remember your password?
                  <Link color="brand.500" href="/login">
                    {" "}
                    Login instead
                  </Link>
                </Box>
              </Stack>
            </form>
          </Box>
        }
        childCompSideContent="https://i.pinimg.com/originals/a5/92/23/a59223a81638be37d096fcfa72d7dd48.jpg"
        childOAuthButtonsVisibility={false}
      />
    </Transition>
  );
};

export default ForgotPasswordPage;
