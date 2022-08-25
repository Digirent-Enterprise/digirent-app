import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Gallery.css";
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
  images: string[];
}
interface ShowAllButtonProps {
  images: string[];
}

const ShowAllButton = ({ images }: ShowAllButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <div className="w-full h-full">
        <Button
          className="rounded-md border-2 border-black bg-white bg-opacity-90 hover:scale-[1.02] text-[1rem] -mt-5 ml-20"
          onClick={onOpen}
        >
          Show all images
        </Button>
      </div>

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
              lazy
              navigation
              modules={[Pagination, Navigation]}
              className="w-full mt-10"
            >
              {images.map((image, index) => {
                return (
                  <SwiperSlide className="h-auto w-auto" key={index}>
                    <img src={image} alt="slide" className="swiper-lazy" />
                    <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
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
    <div className="gallery flex justify-center w-full h-full items-center">
      <div className="w-4/5 gap-2 lg:flex h-auto max-h-[500px]">
        <div className="relative flex items-center lg:w-2/4 sm:w-auto">
          <img
            className="w-full h-full lg:rounded-l-2xl"
            src={firstImages}
            alt="firstImage"
          />
          <div className="absolute top-[85%] left-[77%] lg:hidden w-[20%]">
            <ShowAllButton images={images} />
          </div>
        </div>
        <div className="w-1/4 hidden lg:flex lg:flex-col gap-2">
          <div className="h-3/6">
            <img className="w-full h-full" src={images[1]} alt="secondImage" />
          </div>
          <div className="h-3/6">
            <img className="w-full h-full" src={images[2]} alt="thirdImage" />
          </div>
        </div>
        <div className="w-1/4 hidden lg:flex lg:flex-col gap-2">
          <div className="h-3/6 rounded-tr-2xl">
            <img
              className="w-full h-full rounded-tr-2xl "
              src={images[3]}
              alt="fourthImage"
            />
          </div>
          <div className="relative flex h-3/6 w-full rounded-br-2xl">
            <img
              className="w-full h-full rounded-br-2xl"
              src={fifthImages}
              alt="fifthImage"
            />
            <div className="absolute top-[77%] right-[45%] w-[40%]">
              <ShowAllButton images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
