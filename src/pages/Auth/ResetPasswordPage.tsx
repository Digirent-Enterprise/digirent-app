import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
// import { useNavigate } from "react-router-dom";
// import qs from "qs";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
} from "@chakra-ui/react";
import { WarningTwoIcon } from "@chakra-ui/icons";
// import { customAxios } from "../../http-common";
import { AuthFormGrid, Transition } from "../../components";
import Helmet from "../../Helmet";

interface IFormInputs {
  pw1: string;
  pw2: string;
  isSubmitting: boolean;
}

const schema = yup.object().shape({
  pw1: yup
    .string()
    .min(8, "Your password must be at least 8 characters!")
    .max(15)
    .required(),
  pw2: yup
    .string()
    .oneOf([yup.ref("pw1"), null], "Passwords do not match!")
    .required(),
});

const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  // const navigate = useNavigate();

  const onSubmit = (data: IFormInputs) => {
    // return axios("application/x-www-form-urlencoded")
    //   .post("api/auth/register", qs.stringify(data))
    //   .then((res) => {
    //     if (res.status === 201) {
    //       <StatusToaster
    //         childCompStatusColor="success"
    //         childCompToasterTitle="Account created!"
    //         childCompToasterDescription="Your information has been registered successfully with us!"
    //       />;
    //       navigate("/login");
    //     } else {
    //       <StatusToaster
    //         childCompStatusColor="warning"
    //         childCompToasterTitle={`Failed to register, error code ${res.status}`}
    //         childCompToasterDescription={`${res.statusText} error has happened while creating your account!`}
    //       />;
    //     }
    //   });
    alert(data);
  };

  return (
    <Transition>
      <Helmet
        title="Rest Password"
        addPostfixTitle
        description="Enter new password in order to reset new ones"
      />
      <AuthFormGrid
        childTitle="Reset Password"
        childCompForm={
          <Box textAlign="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2} p="1rem" backgroundColor="whiteAlpha.900">
                <FormControl isInvalid={!!errors.pw1?.message}>
                  <FormLabel>New Password</FormLabel>
                  <Input
                    {...register("pw1")}
                    pr="4.5rem"
                    type="password"
                    placeholder="Enter password"
                    name="pw1"
                  />
                  <FormErrorMessage>
                    {" "}
                    <WarningTwoIcon />
                    {errors?.pw1?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.pw2?.message}>
                  <FormLabel>Confirm New Password</FormLabel>
                  <Input
                    {...register("pw2")}
                    pr="4.5rem"
                    type="password"
                    placeholder="Confirm password"
                    name="pw2"
                  />
                  <FormErrorMessage>
                    <WarningTwoIcon />
                    {errors?.pw2?.message}
                  </FormErrorMessage>
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="brand"
                  width="full"
                  disabled={!!errors.pw1 || !!errors.pw2}
                >
                  Reset Password
                </Button>
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

export default ResetPasswordPage;
