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
} from "@chakra-ui/react";
import { customAxios } from "../../../http-common";
import DefaultLayout from "../DefaultAdminLayout";
import qs from 'qs'
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
  const { register, handleSubmit } = useForm<FormValues>({});

  const handleUploadFiles = async (file: any) => {
    const fd = new FormData();
    fd.append('images', file)
    const response = await customAxios('multipart/form-data').post('product/upload-single-image', fd);
    setImages([...images, response.data.url]);
  };

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      accept: {
        "image/*": [],
      },
      maxFiles: 10,
      onDrop: (acceptedFiles: any) => {
        acceptedFiles.map((file: any) =>
            handleUploadFiles(file)
        );
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
            <img
                className="p-4 w-full"
                src={image}
            />
          </div>
        </div>)
      }
  );

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
  //   return () =>
  //     acceptedFiles.forEach((image) => URL.revokeObjectURL(image.path));
  // }, []);

  const onSubmit = async (data: FormValues) => {
    const response = await customAxios().post("/product", qs.stringify(Object.assign(data, {images})));
    if (response.status === 200) alert('success');
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
                <Input {...register("description")} name="description" />
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
                {/* <div className="border-2 border-dashed text-blue-100 text-center p-8 m-5">
                    <label htmlFor="images" className="cursor-pointer ">
                      Choose images
                    </label>
                  </div> */}
              </FormControl>
              <aside className="flex flex-row">{thumbs}</aside>

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
