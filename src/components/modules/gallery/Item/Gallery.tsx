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

const ShowAllButton = (images: string[]) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        className=" w-9/12 h-12 relative left-16 bottom-16 rounded-md border-2 border-black bg-white bg-opacity-90 hover:scale-[1.02]"
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
                type: "fraction",
              }}
              navigation
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="https://rukminim1.flixcart.com/image/612/612/kx9as280/tv-entertainment-unit/h/w/v/-original-imag9r2y3n6jzfrz.jpeg?q=70"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>{images}</SwiperSlide>
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
  images: [],
}: GalleryProps) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex gap-2 w-4/5  ml-52 ">
        <div className="w-2/4 h-[508px] flex justify-center items-center ">
          <img
            className="h-full w-full rounded-l-2xl"
            src={firstImages}
            alt="firstImage"
          />
        </div>
        <div className=" w-1/4 h-[500px] gap-2 flex flex-col">
          <div className=" bg-red-100 h-3/6 ">
            <img
              className="h-full w-full"
              src={secondImages}
              alt="secondImage"
            />
          </div>
          <div className=" bg-blue-100 h-3/6">
            <img className="h-full w-full" src={thirdImages} alt="thirdImage" />
          </div>
        </div>
        <div className=" w-1/4 h-[500px] gap-2 flex flex-col">
          <div className=" bg-yellow-100 h-3/6 rounded-tr-2xl">
            <img
              className="h-full w-full rounded-tr-2xl "
              src={fourthImages}
              alt="fourthImage"
            />
          </div>
          <div className=" bg-green-100 h-3/6 rounded-br-2xl">
            <img
              className="h-full w-full rounded-br-2xl "
              src={fifthImages}
              alt="fifthImage"
            />
          </div>
          <div className="flex flex-col">
            {/* <ShowAllButton
                images={images}
              /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
