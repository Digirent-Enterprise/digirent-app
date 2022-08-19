import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import * as yup from "yup";
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
import qs from "qs";
import { customAxios } from "../../../http-common";
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

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      maxFiles: 10,
      onDrop: async (acceptedFiles: any) => {
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
      "/product",
      qs.stringify(Object.assign(data, { images })),
    );
    if (response.status === 200) alert("success");
  };

  return (
    <DefaultLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pb-10 mx-auto max-w-7xl lg:py-12 lg:px-8">
          <div className="text-center title">
            <h1>Add Product</h1>
          </div>

          <Grid templateColumns="repeat(5, 1fr)" gap={5}>
            <GridItem colSpan={2}>
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
            </GridItem>

            <GridItem colSpan={3}>
              <FormControl>
                <FormLabel>Product Images</FormLabel>
                <Input
                  {...register("images")}
                  name="images"
                  type="file"
                  multiple
                  id="images"
                />
                {/* <div className="p-8 m-5 text-center text-blue-100 border-2 border-dashed">
                    <label htmlFor="images" className="cursor-pointer ">
                      Choose images
                    </label>
                  </div> */}
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

              <FormControl className="pb-5" isRequired>
                <FormLabel>Serial</FormLabel>
                <Input {...register("serial")} type="text" name="serial" />
              </FormControl>
            </GridItem>

            <GridItem className="pb-5" colSpan={{ base: 6, sm: 3 }}>
              <FormControl>
                <FormLabel>Product Images</FormLabel>
                <div
                  className="border-dashed border-4 text-center justify-center p-[20%]"
                  {...getRootProps()}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here ...</p>
                  ) : (
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  )}
                </div>
                {/* <div className="p-8 m-5 text-center text-blue-100 border-2 border-dashed">
                    <label htmlFor="images" className="cursor-pointer ">
                      Choose images
                    </label>
                  </div> */}
              </FormControl>
              <aside className="flex flex-row">{thumbs}</aside>

              <Grid templateColumns="repeat(4, 1fr)" gap={4}>
                <GridItem colSpan={2}>
                  <button
                    className="w-full p-2 my-5 text-white bg-blue-200 rounded hover:bg-blue-100"
                    type="submit"
                    disabled={isLoading}
                  >
                    Submit
                  </button>
                </GridItem>
                <GridItem colSpan={2}>
                  <button
                    className="w-full p-2 my-5 text-white bg-blue-200 rounded hover:bg-blue-100"
                    type="reset"
                    onClick={() => setImages([])}
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
