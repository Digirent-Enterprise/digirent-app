import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  Box,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

interface GalleryProps {
  firstImages?: string;
  secondImages?: string;
  thirdImages?: string;
  fourthImages?: string;
  fifthImages?: string;
  images: string[];
}
interface ShowAllButtonProps {
  images: string[];
}

const ShowAllButton = ({ images }: ShowAllButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        className="w-full h-full rounded-md border-2 border-black bg-white bg-opacity-90 hover:scale-[1.02] text-[1rem]"
        onClick={onOpen}
      >
        Show all images
      </Button>
      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Swiper
              pagination={{
                enabled: true,
                type: "fraction",
              }}
              loop
              navigation
              modules={[Pagination, Navigation]}
              className="w-full mt-10"
            >
              {images.map((image, index) => {
                return (
                  <SwiperSlide className="h-auto w-auto " key={index}>
                    <img src={image} alt="slide" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

const Gallery = ({
  firstImages,
  secondImages,
  thirdImages,
  fourthImages,
  fifthImages,
  images,
}: GalleryProps) => {
    return (
      <div className="flex flex-col justify-center w-full h-full items-center ">
        <div className="w-4/5 gap-2 lg:flex h-auto">
          <div className="relative flex items-center lg:w-2/4 sm:w-auto">
            <img
              className="w-full h-full lg:rounded-l-2xl "
              src={firstImages}
              alt="firstImage"
            />
            <div className="absolute top-[85%] left-[77%] lg:hidden w-[20%]">
              <ShowAllButton images={images} />
            </div>
          </div>
          <div className="w-1/4 sm:hidden md:hidden lg:flex lg:flex-col gap-2">
            <div className="h-3/6">
              <img
                className="w-full h-full"
                src={secondImages}
                alt="secondImage"
              />
            </div>
            <div className="h-3/6">
              <img className="w-full h-full" src={thirdImages} alt="thirdImage" />
            </div>
          </div>
          <div className="w-1/4 sm:hidden md:hidden lg:visible lg:flex lg:flex-col gap-2">
            <div className="h-3/6 rounded-tr-2xl">
              <img
                className="w-full h-full rounded-tr-2xl "
                src={fourthImages}
                alt="fourthImage"
              />
            </div>
            <div className="relative flex h-3/6 w-full rounded-br-2xl">
              <img
                className="w-full h-full rounded-br-2xl "
                src={fifthImages}
                alt="fifthImage"
              />
              <div className="relative top-[77%] right-[45%] w-[40%]"><ShowAllButton images={images}/></div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Gallery;
