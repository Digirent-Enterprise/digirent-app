import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
import { WarningTwoIcon } from "@chakra-ui/icons";
import { toast } from "react-toastify";
import { customAxios } from "../../http-common";
import { AuthFormGrid, Transition } from "../../components";
import Helmet from "../../Helmet";

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
  email: yup.string().email().required("Your email is required!"),
  phone: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid!",
    ),
  pw1: yup
    .string()
    .min(8, "Your password must be at least 8 characters!")
    .max(15)
    .required("Please enter your password!"),
  pw2: yup
    .string()
    .oneOf([yup.ref("pw1"), null], "Your passwords do not match!")
    .required("Please retype your password!"),
});

const RegisterPage = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const onSubmit = (data: IFormInputs) => {
    return customAxios("application/json")
      .post("auth/register", data)
      .then((res) => {
        if (res.status === 201) {
          toast.success(
            "Your information has been registered successfully with us!",
            {
              theme: "dark",
              icon: "🚀",
            },
          );
          navigate("/login");
        }
      })
      .catch((error: any) => {
        toast.warning(
          `${error.statusText} error has happened while creating your account!`,
          {
            theme: "dark",
          },
        );
      });
  };

  return (
    <Transition>
      <Helmet
        title={t("Register")}
        addPostfixTitle
        description={t("RegisterNew")}
      />
      <AuthFormGrid
        childTitle={t("JoinUs")}
        childCompForm={
          <Box textAlign="center">
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="new-password">
              <Stack spacing={2} p="1rem" backgroundColor="whiteAlpha.900">
                <FormControl isInvalid={!!errors?.name?.message} isRequired>
                  <FormLabel>{t("Name")}</FormLabel>
                  <Input
                    {...register("name")}
                    placeholder={t("EnterName")}
                    size="md"
                    type="text"
                    name="name"
                  />
                  <FormErrorMessage>
                    <WarningTwoIcon /> {errors?.name?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.email?.message} isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    {...register("email")}
                    placeholder={t("EnterYourEmail")}
                    size="md"
                    name="email"
                  />
                  <FormErrorMessage>
                    <WarningTwoIcon />
                    {errors?.email?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.phone?.message} isRequired>
                  <FormLabel>{t("PhoneNum")}</FormLabel>
                  <Input
                    {...register("phone")}
                    placeholder={t("EnterYourPhone")}
                    size="md"
                    type="tel"
                    name="phone"
                  />
                  <FormErrorMessage>
                    <WarningTwoIcon /> {errors?.phone?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.pw1?.message}>
                  <FormLabel>{t("Password")}</FormLabel>
                  <Input
                    {...register("pw1")}
                    pr="4.5rem"
                    type="password"
                    placeholder={t("EnterYourPassword")}
                    name="pw1"
                  />
                  <FormErrorMessage>
                    {" "}
                    <WarningTwoIcon />
                    {errors?.pw1?.message}
                  </FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.pw2?.message}>
                  <FormLabel>{t("ConfirmPassword")}</FormLabel>
                  <Input
                    {...register("pw2")}
                    pr="4.5rem"
                    type="password"
                    placeholder={t("ConfirmPassword")}
                    name="pw2"
                  />
                  <FormErrorMessage>
                    <WarningTwoIcon />
                    {errors?.pw2?.message}
                  </FormErrorMessage>
                  <FormHelperText textAlign="right">
                    <Link href="/forgot-password">{t("ForgotP")}</Link>
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
                  {t("Resgister")}
                </Button>

                <Box>
                  {t("AlreadyHadAcc?")}
                  <Link color="brand.500" href="/login">
                    {" "}
                    {t("Login")}
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

export default RegisterPage;
