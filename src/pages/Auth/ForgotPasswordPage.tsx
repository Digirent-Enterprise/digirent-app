import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
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
  // FormHelperText,
  Link,
  FormErrorMessage,
} from "@chakra-ui/react";
// import { customAxios } from "../../http-common";
import { AuthFormGrid, Transition } from "../../components";
import { saveUserInfo } from "../../store/actions/user.action";
import Helmet from "../../Helmet";
import axios from "axios";
import qs from "qs";
import {toast} from "react-toastify";

interface IFormInputs {
  email: string;
  isSubmitting: boolean;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const ForgotPasswordPage = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  // useEffect(() => {
  //   if (email) {
  //     dispatch(saveEmail(email));
  //   }
  // }, []);
  const navigate = useNavigate();

  const onSubmit = async (data: IFormInputs) => {
    await axios.post('https://backend-digirent-rmit-app.herokuapp.com/v1/api/auth/forgot-password-request', qs.stringify({
      email: data.email
    })).then(res => {
      toast.success("We are sending your request. Let's wait...")
      setTimeout(() => {
        navigate("/email-sent");
      }, 3000)
    }).catch(err => {
      toast.error("Invalid Token")
    });
  };

  const handleSaveEmail = (data: any) => {
    setEmail(data);
  };

  return (
    <Transition>
      <Helmet
        title={t("ForgotPassHelmetTitle")}
        addPostfixTitle
        description={t("ForgotPassHelmetDes")}
      />
      <AuthFormGrid
        childTitle={t("ForgotP")}
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
                    placeholder={t("EnterYourEmail")}
                    size="md"
                    value={email}
                    onChange={(e) => handleSaveEmail(e.target.value)}
                  />
                  <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
                </FormControl>

                <Button
                  borderRadius={0}
                  type="submit"
                  variant="solid"
                  colorScheme="blue"
                  width="full"
                  disabled={!!errors.email}
                >
                  {t("Reset")}
                </Button>

                <Box>
                  {t("Remember?")}
                  <Link color="brand.500" href="/login">
                    {" "}
                    {t("LoginInstead")}
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
