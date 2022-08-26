import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  GridItem,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";
import { useDropzone } from "react-dropzone";
import { getCurrentUserSelector } from "../../../store/selectors/user.selector";
import { IMAGES } from "../../../utils/constants/image.constant";
import { customAxios } from "../../../http-common";

const UserProfileAvatar = () => {
  const currentUser = useSelector(getCurrentUserSelector);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUploadFiles = async (file: any) => {
    const fd = new FormData();
    fd.append("images", file);
    const response = await customAxios("multipart/form-data").post(
      "product/upload-single-image",
      fd,
    );
    setImages([...images, response.data.url]);
  };

  const { isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
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
  return (
    <Avatar
      boxSize="350px"
      src={currentUser.avatar ? currentUser.avatar : IMAGES.defaultAvatar}
      mb={4}
      pos="relative"
      className="overflow-hidden"
    >
      <div className="absolute bottom-0 ">
        <Button
          onClick={onOpen}
          size="lg"
          height="100px"
          width="400px"
          colorScheme="blackAlpha"
          className="opacity-0 hover:opacity-100 hover:bg-[#222] absolute bottom-0 outline-none box-border cursor-pointer duration-500 z-30"
        >
          Change Avatar
        </Button>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <GridItem className="pb-5 p-5" colSpan={{ base: 6, sm: 3 }}>
            <FormControl>
              <FormLabel>Change your avatar</FormLabel>
              <div className="border-dashed border-4 text-center justify-center p-[20%]">
                <input />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>
            </FormControl>
            <aside className="flex flex-row" />
          </GridItem>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="reset" mr={3}>
              Reset
            </Button>
            <Button type="submit" mr={3}>
              Change password
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Avatar>
  );
};

export default UserProfileAvatar;
