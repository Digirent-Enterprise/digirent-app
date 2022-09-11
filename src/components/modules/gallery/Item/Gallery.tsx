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
  firstImages: string;
  secondImages: string;
  thirdImages: string;
  fourthImages: string;
  fifthImages: string;
  images: string[];
}
interface ShowAllButtonProps {
  images: string[];
}

const ShowAllButton = ({ images }: ShowAllButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <div className="w-auto h-auto">
        <Button
          className="inline-block rounded-md border-2 border-black bg-white bg-opacity-90 hover:scale-[1.02] w-auto h-auto"
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
    <div className="flex justify-center w-full h-full items-center">
      <div className="w-4/5 gap-2 lg:flex h-auto max-h-[500px]">
        <div className="relative flex items-center lg:w-2/4">
          <img
            className="w-full h-full object-scale-down lg:rounded-l-2xl shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)]"
            src={firstImages}
            alt="firstImage"
          />
          <div className="absolute bottom-2 right-2 lg:hidden w-auto">
            <ShowAllButton images={images} />
          </div>
        </div>
        <div className="w-1/4 hidden lg:flex lg:flex-col gap-2">
          <div className="h-3/6">
            <img
              className="w-full h-full object-scale-down shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)]"
              src={secondImages}
              alt="secondImage"
            />
          </div>
          <div className="h-3/6">
            <img
              className="w-full h-full object-scale-down shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)]"
              src={thirdImages}
              alt="thirdImage"
            />
          </div>
        </div>
        <div className="w-1/4 hidden lg:flex lg:flex-col gap-2">
          <div className="h-3/6 rounded-tr-2xl">
            <img
              className="w-full h-full object-scale-down rounded-tr-2xl shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)]"
              src={fourthImages}
              alt="fourthImage"
            />
          </div>
          <div className="relative flex h-3/6 w-full rounded-br-2xl">
            <img
              className="w-full h-full object-scale-down rounded-br-2xl shadow-[0px_0px_5px_2px_rgba(0,0,0,0.1)]"
              src={fifthImages}
              alt="fifthImage"
            />
            <div className="absolute bottom-2 right-2">
              <ShowAllButton images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
