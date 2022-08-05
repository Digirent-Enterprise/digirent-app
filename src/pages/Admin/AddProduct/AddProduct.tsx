import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
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
  Textarea,
} from "@chakra-ui/react";

import { customAxios } from "../../../http-common";

import { StatusToaster, Transition } from "../../../components";
import DefaultLayout from "../DefaultLayout";

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
//   description: yup.string().required(),
//   status: yup.boolean().required(),
//   rentalCost: yup.string().required(),
//   rentalCostType: yup.string().required(),
//   imagePath: yup.string().required(),
// });

const AddProduct = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const _onConvertData = (data: FormValues, fd: FormData) => {
    fd.append('name', data.name)
    fd.append('category', data.category)
    fd.append('brand', data.brand)
    fd.append('images', data.images)
    fd.append('description', data.description)
    fd.append('rentalCost', data.rentalCost)
    fd.append('rentalCostType', data.rentalCostType)
    fd.append('serial', data.serial || "123")
    return fd;
  }

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    let fd = new FormData();
    console.log('data', data)
    fd = _onConvertData(data, fd)
    console.log('fd', fd)
    return customAxios("multipart/form-data")
      .post("/product", fd)
      .then((res) => {
        if (res.status === 201) {
          <StatusToaster
            childCompToasterTitle="Product is added"
            childCompStatusColor="success"
            childCompToasterDescription="Product is added!"
          />;
          console.log("success");
        } else {
          console.log(res.status, "failed");
        }
      });
  };

  return (
    <Transition>
      <DefaultLayout>
        <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
          <div className="pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8">
            <div className="title text-center">
              <h1>Add Product</h1>
            </div>

            <Grid templateColumns="repeat(5, 1fr)" gap={5}>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel>Product Name</FormLabel>
                  <Input {...register("name")} type="text" name="name" />
                </FormControl>

                <FormControl isRequired>
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

                <FormControl isRequired>
                  <FormLabel>Brand</FormLabel>
                  <Input {...register("brand")} type="text" name="brand" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Product Description</FormLabel>
                  <Textarea {...register("description")} name="description" />
                </FormControl>
              </GridItem>

              <GridItem colSpan={3}>
                <FormControl>
                  <FormLabel>Product Images</FormLabel>
                  <Grid templateColumns="repeat(5, 1fr)" gap={4}>
                    <GridItem rowSpan={2} colSpan={1}>
                      <Input
                        {...register("images")}
                        name="images"
                        type="file"
                        multiple
                      />
                    </GridItem>
                    {/* <GridItem rowSpan={1} colSpan={2}>
                      <Input
                        {...register("imagePath")}
                        name="imagePath"
                        type="file"
                      />
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                      <Input
                        {...register("imagePath")}
                        name="imagePath"
                        type="file"
                      />
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                      <Input
                        {...register("imagePath")}
                        name="imagePath"
                        type="file"
                      />
                    </GridItem>
                    <GridItem rowSpan={1} colSpan={2}>
                      <Input
                        {...register("imagePath")}
                        name="imagePath"
                        type="file"
                      />
                    </GridItem> */}
                  </Grid>
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
                        {...register("rentalCostType")}
                        placeholder="Select type"
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
                  <Input {...register("serial")} type="text" name="name" />
                </FormControl>

                <div className="text-center">
                  <button
                    className="bg-blue-200 p-2 my-5 text-white rounded hover:bg-blue-100 w-full"
                    type="submit"
                  >
                    Add Product
                  </button>
                </div>
              </GridItem>
            </Grid>
          </div>
        </form>
      </DefaultLayout>
    </Transition>
  );
};

export default AddProduct;
