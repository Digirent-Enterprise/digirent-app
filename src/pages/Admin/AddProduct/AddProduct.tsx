import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
// import * as yup from "yup";
import qs from "qs";

import {
  Container,
  FormControl,
  FormLabel,
  Stack,
  Flex,
  Box,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import Helmet from "../../../Helmet";
import { customAxios } from "../../../http-common";
import DefaultLayout from "../DefaultAdminLayout";
import { getAllCategoriesSelector } from "../../../store/selectors/category.selector";
import { getCategories } from "../../../store/actions/category.action";

type FormValues = {
  name: string;
  category: string;
  brand: string;
  description: string;
  images: string;
  rentalCost: string;
  rentalCostType: string;
  serial: string;
};

// const schema = yup.object().shape({
//   name: yup.string().required(),
//   serial: yup.string().required(),
//   brand: yup.string().required(),
//   description: yup.string().required().min(150),
//   rentalCost: yup.string().required(),
//   rentalCostType: yup.string().required(),
//   imagePath: yup.string().required(),
// });

const AddProduct = () => {
  const { t } = useTranslation();
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<FormValues>({});

  const handleUploadFiles = async (file: any) => {
    const fd = new FormData();
    fd.append("images", file);
    const response = await customAxios("multipart/form-data").post(
      "product/upload-single-image",
      fd,
    );
    setImages([...images, response.data.url]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 10,
    onDrop: async (acceptedFiles: File[]) => {
      setIsLoading(true);
      await acceptedFiles.map((file: any) => handleUploadFiles(file));
      setIsLoading(false);
      setImages(
        acceptedFiles.map((image: any) =>
          Object.assign(image, {
            preview: image,
          }),
        ),
      );
    },
  });

  const thumbs = images.map((image: any) => {
    return (
      <div className="flex flex-row flex-wrap" key={image.name}>
        <div className="flex overflow-hidden">
          <img className="w-full p-4" src={image} alt="thumbs" />
        </div>
      </div>
    );
  });

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () =>
  //     acceptedFiles.forEach((image) => URL.revokeObjectURL(image.path));
  // }, []);

  const onSubmit = async (data: FormValues) => {
    const response = await customAxios().post(
      "product",
      qs.stringify(Object.assign(data, { images })),
    );
    if (response.status === 200) {
      toast.success("Product is added successfully!", {
        theme: "dark",
        icon: "🚀",
      });
    }
  };

  // Category Data
  const dispatch = useDispatch();
  const categoryFetchData = useSelector(getAllCategoriesSelector);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const categoryData = useMemo(() => categoryFetchData, [categoryFetchData]);

  return (
    <DefaultLayout>
      <Helmet
        title={t("AddProd")}
        addPostfixTitle
        description={t("AddProdDes")}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Container maxW="7xl">
          <Stack
            align="center"
            spacing={{ base: 8, md: 10 }}
            py={{ base: 5, md: 7 }}
            direction={{ base: "column", md: "row" }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <GridItem colSpan={2} className="px-4 ">
                <FormControl isRequired>
                  <FormLabel>{t("ProductName")}</FormLabel>
                  <Input {...register("name")} type="text" name="name" />
                </FormControl>

                <FormControl className="pb-5" isRequired>
                  <FormLabel>{t("Category")}</FormLabel>
                  <Select
                    {...register("category")}
                    name="category"
                    placeholder={t("SelectCat")}
                  >
                    {categoryData.map((category) => (
                      <option value={category.name}>{category.name}</option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl className="pb-5" isRequired>
                  <FormLabel>{t("Brand")}</FormLabel>
                  <Input {...register("brand")} type="text" name="brand" />
                </FormControl>

                <FormControl className="pb-5" isRequired>
                  <FormLabel>{t("ProdDes")}</FormLabel>
                  <Textarea {...register("description")} name="description" />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>{t("RentalCost")}</FormLabel>
                  <InputGroup>
                    <Input
                      {...register("rentalCost")}
                      name="rentalCost"
                      type="text"
                    />
                    <InputRightAddon>
                      <Select
                        variant="unstyled"
                        {...register("rentalCostType")}
                        placeholder={t("SelectPeriod")}
                      >
                        <option>{t("Day")}</option>
                        <option>{t("Month")}</option>
                        <option>{t("Year")}</option>
                      </Select>
                    </InputRightAddon>
                  </InputGroup>
                </FormControl>

                <FormControl className="pb-5" isRequired>
                  <FormLabel>Serial</FormLabel>
                  <Input {...register("serial")} type="text" name="serial" />
                </FormControl>
              </GridItem>
            </Stack>
            <Flex
              flex={1}
              justify="center"
              align="center"
              position="relative"
              w="full"
            >
              <Box
                position="relative"
                height="400px"
                rounded="2xl"
                width="full"
                overflow="hidden"
              >
                <GridItem className="pb-5 px-4" colSpan={{ base: 6, sm: 3 }}>
                  <FormControl className="min-w-4xl w-full">
                    <FormLabel>{t("ProdImg")}</FormLabel>
                    <div
                      className="border-dashed border-4 text-center justify-center p-[20%] "
                      {...getRootProps()}
                    >
                      <input {...getInputProps()} />
                      {isDragActive ? (
                        <p>{t("Drop")}</p>
                      ) : (
                        <p>{t("DragNDrop")}</p>
                      )}
                    </div>
                  </FormControl>
                  <aside className="flex flex-row">{thumbs}</aside>

                  <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                    <GridItem colSpan={2}>
                      <button
                        className="w-full p-2 my-5 text-white bg-blue-200 rounded hover:bg-blue-100"
                        type="submit"
                        disabled={isLoading}
                      >
                        {t("Add")}
                      </button>
                    </GridItem>
                    <GridItem colSpan={2}>
                      <button
                        className="w-full p-2 my-5 text-white bg-blue-200 rounded hover:bg-blue-100"
                        type="reset"
                        onClick={() => setImages([])}
                      >
                        {t("Clear")}
                      </button>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Box>
            </Flex>
          </Stack>
        </Container>
      </form>
    </DefaultLayout>
  );
};

export default AddProduct;
