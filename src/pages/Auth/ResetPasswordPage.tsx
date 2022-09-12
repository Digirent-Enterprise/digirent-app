import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
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
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import qs from "qs";
import Helmet from "../../Helmet";
import { AuthFormGrid, Transition } from "../../components";

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
  const { token } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const verifyToken = async () => {
    await axios
      .post(
        "https://backend-digirent-rmit-app.herokuapp.com/api/auth/verify-forgot-password-request",
        {},
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        toast.success(
          "You have validated your account. Let's change your password",
          { theme: "dark" },
        );
        setEmail(res.data.email);
      })
      .catch(() => {
        toast.error("Invalid Token (Token wrong or expired)", {
          theme: "dark",
        });
        navigate("/");
      });
  };

  const resetForgotPassword = async (pw2: string) => {
    await axios
      .put(
        "https://backend-digirent-rmit-app.herokuapp.com/v1/api/auth/reset-forgot-password",
        qs.stringify({
          newPassword: pw2,
        }),
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        },
      )
      .then(() => {
        toast.success("We are verifying your request. Let's wait...", {
          theme: "dark",
        });
        setTimeout(() => {
          navigate("/reset-success");
        }, 3000);
      })
      .catch(() => {
        toast.error("Invalid Token", { theme: "dark" });
      });
  };

  const onSubmit = async (data: IFormInputs) => {
    await resetForgotPassword(data.pw2);
  };

  useEffect(() => {
    if (token) {
      verifyToken();
    }
  }, []);

  return (
    <Transition>
      <Helmet
        title={t("ResetPass")}
        addPostfixTitle
        description={t("ResetPassHelmetDes")}
      />
      <AuthFormGrid
        childTitle={t("ResetPass")}
        childCompForm={
          <Box textAlign="center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={2} p="1rem" backgroundColor="whiteAlpha.900">
                <FormControl isInvalid={!!errors.pw1?.message}>
                  <FormLabel>{t("NewPass")}</FormLabel>
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
                </FormControl>
                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="brand"
                  width="full"
                  disabled={!!errors.pw1 || !!errors.pw2}
                >
                  {t("ResetPass")}
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
