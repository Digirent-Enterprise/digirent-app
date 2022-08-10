import React, { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import qs from "qs";

import {
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { customAxios } from "../../../http-common";
import { StatusToaster, Transition } from "../../../components";
import DefaultLayout from "../DefaultAdminLayout";

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

const schema = yup.object().shape({
  name: yup.string().required(),
  serial: yup.string().required(),
  brand: yup.string().required(),
  description: yup.string().required().min(150),
  rentalCost: yup.string().required(),
  rentalCostType: yup.string().required(),
  imagePath: yup.string().required(),
});

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const { register, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      maxFiles: 5,
      onDrop: (acceptedFiles: any) => {
        setImages(
          acceptedFiles.map((image: any) =>
            Object.assign(image, {
              preview: URL.createObjectURL(image),
            }),
          ),
        );
      },
    });

  const thumbs = images.map((image: any) => (
    <div className="flex flex-row flex-wrap" key={image.name}>
      <div className="flex overflow-hidden">
        <img
          className="p-4 w-full"
          src={image.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(image.preview);
          }}
        />
      </div>
    </div>
  ));

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () =>
  //     acceptedFiles.forEach((image) => URL.revokeObjectURL(image.path));
  // }, []);

  const onSubmit = (data: FormValues) => {
    const fd = new FormData();
    console.log("data", data);
    console.log("fd", fd);
    // customAxios("multipart/form-data").post("/product", fd),
    alert({ ...data, images: "hi" });
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8">
          <h1 className="py-8 text-4xl font-semibold text-center text-black">
            Add Product
          </h1>
          <Grid
            templateColumns={{
              base: "repeat(6, 1fr)",
              sm: "repeat(6, 1fr)",
            }}
            gap={6}
          >
            <GridItem colSpan={{ base: 6, sm: 3 }}>
              <FormControl className="pb-5" isRequired>
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
                  <option>Laptops</option>
                  <option>Cellphones</option>
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
              <FormControl className="pb-5" isRequired>
                <FormLabel>Rental Cost</FormLabel>
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
                      placeholder="Select rent period"
                    >
                      <option>Day</option>
                      <option>Month</option>
                      <option>Year</option>
                    </Select>
                  </InputRightAddon>
                </InputGroup>
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Serial</FormLabel>
                <Input {...register("serial")} type="text" name="serial" />
              </FormControl>
>>>>>>> ebe732e3166c450fd9fc1e371b15ca879bfefc45

              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                  <button
                    className="bg-blue-200 p-2 my-5 text-white rounded hover:bg-blue-100 w-full"
                    type="submit"
                  >
                    Submit
                  </button>
                </GridItem>
                <GridItem colSpan={2}>
                  <button
                    className="bg-blue-200 p-2 my-5 text-white rounded hover:bg-blue-100 w-full"
                    type="reset"
                  >
                    Clear
                  </button>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </div>
      </form>
    </DefaultLayout>
  );
};

export default AddProduct;
