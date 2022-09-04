import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDropzone } from "react-dropzone";
import {
  Switch,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormErrorMessage,
  Select,
  Textarea,
} from "@chakra-ui/react";
import qs from "qs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { customAxios } from "../../http-common";
import DefaultLayout from "../DefaultLayout";
import Helmet from "../../Helmet";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface IFormInputs {
  email: string;
  inquiryType: string;
  inquiryDescription: string;
  isSubmitting: boolean;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  inquiryType: yup.string().required(),
  inquiryDescription: yup.string().required(),
});

const CustomerInquiry = () => {
  const { t } = useTranslation();
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [img, setImg] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  const handleUploadFiles = async (file: any) => {
    const fd = new FormData();
    fd.append("images", file);
    const response = await customAxios("multipart/form-data").post(
      "product/upload-single-image",
      fd,
    );
    if (response.data) {
      setImg(response.data.url!);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    onDrop: async (acceptedFiles: File[]) => {
      await handleUploadFiles(acceptedFiles[0]);
    },
  });

  const onSubmit = (data: IFormInputs) => {
    setLoading(true);
    if (agreed) {
      customAxios()
        .post("inquiry", qs.stringify({ ...data, image: img }))
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            toast.success("We've got your inquiry!", {
              theme: "dark",
              icon: "🚀",
            });
            setLoading(false);
          }
        })
        .catch((error: any) => {
          setLoading(false);
          toast.warning(
            `${error.response.data} error, failed to create your inquiry!`,
            {
              theme: "dark",
            },
          );
        })
        .finally(() => {
          navigate("/");
        });
    } else {
      setTimeout(() => {
        toast.warning("You need to agree our policy!", { theme: "dark" });
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <DefaultLayout>
      <Helmet
        title={t("ContactPageHelmetTitle")}
        addPostfixTitle
        description={t("ContactPageHelmetDes")}
      />
      <div className="px-4 py-16 overflow-hidden bg-white sm:px-6 lg:px-8 lg:py-24">
        <div className="relative max-w-xl mx-auto">
          <svg
            className="absolute transform translate-x-1/2 left-full"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <svg
            className="absolute bottom-0 transform -translate-x-1/2 right-full"
            width={404}
            height={404}
            fill="none"
            viewBox="0 0 404 404"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="85737c0e-0916-41d7-917f-596dc7edfa27"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={404}
              fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
            />
          </svg>
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {t("ContactSales")}
            </h2>
            <div className="mt-4 text-lg leading-6 text-gray-500">
              {t("AskUs")}
            </div>
          </div>
          <div className="mt-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            >
              <div className="sm:col-span-2">
                <Stack spacing={4} p="1rem" backgroundColor="whiteAlpha.900">
                  <FormControl isInvalid={!!errors?.email?.message} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                      {...register("email")}
                      type="email"
                      name="email"
                      placeholder={t("EnterYourEmail")}
                      size="md"
                    />
                    <FormErrorMessage>
                      {errors?.email?.message}
                    </FormErrorMessage>
                  </FormControl>

                  <FormControl
                    isInvalid={!!errors?.inquiryType?.message}
                    isRequired
                  >
                    <FormLabel>{t("InqType")}</FormLabel>
                    <Select
                      {...register("inquiryType")}
                      name="inquiryType"
                      size="md"
                      placeholder={t("Topic")}
                    >
                      <option value="Product">{t("Products")}</option>
                      <option value="Rent Policy">{t("RentPolicy")}</option>
                      <option value="Transaction and Payment">
                        {t("TransactionNPayment")}
                      </option>
                      <option value="Return Product">{t("ReturnProd")}</option>
                      <option value="Account">{t("Account")}</option>
                      <option value="Others">{t("Others")}</option>
                    </Select>
                    <FormErrorMessage>
                      {errors?.inquiryType?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors?.inquiryType?.message}
                    isRequired
                  >
                    <FormLabel>{t("Description")}</FormLabel>
                    <Textarea
                      {...register("inquiryDescription")}
                      name="inquiryDescription"
                      size="md"
                      placeholder={t("Description")}
                    />
                    <FormErrorMessage>
                      {errors?.inquiryDescription?.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel>{t("AttachedImg")}</FormLabel>
                    <div
                      style={
                        img
                          ? {
                              backgroundImage: `url('${img}')`,
                              backgroundPosition: "center center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                            }
                          : {
                              background: "none",
                            }
                      }
                      className={
                        img
                          ? "border-4 cursor-pointer text-center justify-center p-[20%]"
                          : "border-dashed border-4 cursor-pointer text-center justify-center p-[20%]"
                      }
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      {img ? null : <p>{t("DragNDrop")}</p>}
                    </div>
                  </FormControl>
                  <Button
                    borderRadius={0}
                    type="submit"
                    variant="solid"
                    colorScheme="brand"
                    width="full"
                    isLoading={loading}
                  >
                    {t("InquireNow")}
                  </Button>
                  <div className="sm:col-span-2">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <Switch
                          onChange={() => setAgreed(!agreed)}
                          className={classNames(
                            "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6366F1]",
                          )}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base text-gray-500">
                          {t("BySelecting")}{" "}
                          <a
                            href="/privacy"
                            className="font-medium text-gray-700 underline"
                          >
                            {t("PrivacyPolicy")}
                          </a>{" "}
                          {t("And")}{" "}
                          <a
                            href="/privacy"
                            className="font-medium text-gray-700 underline"
                          >
                            {t("CookiePolicy")}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </Stack>
              </div>
            </form>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CustomerInquiry;
