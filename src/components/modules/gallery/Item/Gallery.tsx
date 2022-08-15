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
  Images: string[];
}

const ShowAllButton = ({ Images }: ShowAllButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Button
        className=" lg:w-11/12 h-12 lg:left-0 lg:bottom-16 sm:right-44 sm:top-48 rounded-md border-2 border-black bg-white bg-opacity-90 hover:scale-[1.02]"
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
              <div>
                {Images.map((image, index) => {
                  return (
                    <SwiperSlide className="w-full h-full" key={index}>
                      <img src={image} alt="image slide" />
                    </SwiperSlide>
                  );
                })}
              </div>
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
    <div className=" w-full flex flex-col justify-center ">
      <div className=" lg:flex gap-2 w-4/5 h-full lg:ml-52 md:ml-40 sm:ml-40">
        <div className="lg:w-2/4 h-[500px] flex justify-center items-center ">
          <img
            className="h-full w-full lg:rounded-l-2xl sm:w-[800px] "
            src={firstImages}
            alt="firstImage"
          />
          <div className="lg:hidden">
            <ShowAllButton Images={images} />
          </div>
        </div>
        <div className="w-1/4 sm:hidden h-[500px] lg:flex lg:flex-col gap-2">
          <div className=" bg-red h-3/6">
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
        <div className="w-1/4 sm:hidden lg:visible h-[500px] lg:flex lg:flex-col gap-2">
          <div className=" bg-blue-100 h-3/6 rounded-tr-2xl ">
            <img
              className="h-full w-full rounded-tr-2xl "
              src={fourthImages}
              alt="fourthImage"
            />
          </div>
          <div className=" bg-green h-3/6 rounded-br-2xl flex">
            <img
              className="h-full w-full rounded-br-2xl "
              src={fifthImages}
              alt="fifthImage"
            />
            <ShowAllButton Images={images} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
