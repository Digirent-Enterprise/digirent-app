/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useMemo, useState } from "react";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";
import { yupResolver } from "@hookform/resolvers/yup";
import { useTranslation } from "react-i18next";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  Spinner,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [uploadInProgress, setUploadInProgress] = useState(false);
  const { register, handleSubmit } = useForm<FormValues>({
    // resolver: yupResolver(schema),
    mode: "onBlur",
  });
  const navigate = useNavigate();

  const handleUploadFiles = async (file: any) => {
    const fd = new FormData();
    fd.append("images", file);
    return customAxios("multipart/form-data").post(
      "product/upload-single-image",
      fd,
    );
  };

  const getUploadParams = async ({ file, meta }: any) => {
    const fd = new FormData();
    fd.append("images", file);
    const { data } = await handleUploadFiles(file);
    return {
      url: "http://localhost:8000/v1/api/product/upload-single-image",
      body: fd,
      meta: { ...meta, url: data.url },
    };
  };

  const handleChangeStatus = ({ meta }: any, status: any) => {
    if (status === "done") {
      setImages([...images, meta.url]);
      setUploadInProgress(false);
    } else {
      setUploadInProgress(true);
    }
  };

  const onSubmit = (data: FormValues) => {
    setIsLoading(true);
    customAxios()
      .post("product", qs.stringify(Object.assign(data, { images })))
      .then((res) => {
        setIsLoading(true);
        if (res.status === 200) {
          setIsLoading(false);
          toast.success("Product is added successfully!", {
            theme: "dark",
            icon: "🚀",
          });
          navigate("/admin");
        }
      })
      .catch((error: any) => {
        toast.warning(`${error.response.data} error, failed add product!`, {
          theme: "dark",
        });
      });
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
        <div className="lg:mx-8">
          <Grid
            templateColumns={{
              base: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            templateRows={{ base: "repeat(2, 1fr)", lg: "repeat(1, 1fr)" }}
            h="max-content"
            gap={6}
            m={6}
          >
            <GridItem
              colSpan={{
                base: 2,
                lg: 3,
              }}
              colStart={{
                base: 0,
                lg: 0,
              }}
              colEnd={{
                base: 3,
                lg: 3,
              }}
              rowSpan={{
                base: 1,
                lg: 1,
              }}
            >
              <FormControl isRequired>
                <FormLabel>Product Name</FormLabel>
                <Input {...register("name")} type="text" name="name" />
              </FormControl>

              <FormControl className="pb-5" isRequired>
                <FormLabel>Category</FormLabel>
                <Select
                  {...register("category")}
                  name="category"
                  placeholder="Select category"
                >
                  {categoryData.map((category) => (
                    <option value={category.name}>{category.name}</option>
                  ))}
                </Select>
              </FormControl>

              <FormControl className="pb-5" isRequired>
                <FormLabel>Brand</FormLabel>
                <Input {...register("brand")} type="text" name="brand" />
              </FormControl>

              <FormControl className="pb-5" isRequired>
                <FormLabel>Product Description</FormLabel>
                <Textarea {...register("description")} name="description" />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Rental Cost</FormLabel>
                <InputGroup>
                  <Input
                    {...register("rentalCost")}
                    name="rentalCost"
                    type="text"
                  />
                  <InputRightAddon>
                    <Select
                      variant="filled"
                      {...register("rentalCostType")}
                      placeholder="Select rent period"
                    >
                      <option>Day</option>
                      <option>Month</option>
                      <option>Year</option>
                    </Select>
                  </InputRightAddon>
                </InputGroup>
              </FormControl>

              <FormControl className="pb-5" isRequired>
                <FormLabel>Serial</FormLabel>
                <Input {...register("serial")} type="text" name="serial" />
              </FormControl>
            </GridItem>

            <GridItem
              colSpan={{
                base: 2,
                lg: 2,
              }}
              colStart={{
                base: 0,
                lg: 3,
              }}
              colEnd={{
                base: 3,
                lg: 5,
              }}
              rowSpan={{
                base: 1,
                lg: 1,
              }}
              className="flex flex-col lg:justify-between"
            >
              <FormControl>
                <FormLabel>Product Images</FormLabel>
                <div className="text-center justify-center">
                  <Dropzone
                    // PreviewComponent={Preview}
                    maxFiles={10}
                    inputContent="Upload at least 5 Pictures"
                    inputWithFilesContent={(files) =>
                      `${5 - files.length} more`
                    }
                    getUploadParams={getUploadParams}
                    onChangeStatus={handleChangeStatus}
                    accept="image/*"
                    styles={{
                      dropzone: { minHeight: 200, maxHeight: 250 },
                      preview: { height: "3rem" },
                      previewImage: {},
                    }}
                  />
                </div>
              </FormControl>
              <div className="flex flex-row justify-between gap-4">
                <Button
                  className="w-full p-2 my-5 rounded"
                  type="submit"
                  bgColor="blue.200"
                  color="white"
                  _hover={{ bgColor: "blue" }}
                  isDisabled={uploadInProgress || images.length < 5}
                  isLoading={isLoading}
                >
                  {isLoading ? <Spinner /> :t("Add")}
                </Button>

                <Button
                  className="w-full p-2 my-5 text-white"
                  type="reset"
                  bgColor="blue.200"
                  color="white"
                  _hover={{ bgColor: "blue" }}
                  onClick={() => setImages([])}
                >
                  {t("Clear")}
                </Button>
              </div>
            </GridItem>
          </Grid>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default AddProduct;
