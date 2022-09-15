import React from "react";
import {
  Badge,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
// Import Swiper styles
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { SwiperSlide, Swiper } from "swiper/react";

const InquiryModal = ({ onClose, onOpen, isOpen, rowData, pageType }: any) => {
  return (
    <>
      <Button onClick={onOpen} colorScheme="gray" mx="4">
        View Detail
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {pageType === "inquiry" ? (
          <ModalContent>
            <ModalHeader>Inquiry Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="flex flex-col justify-center">
                <a href="#!">
                  <img
                    className="rounded-t-lg"
                    src={rowData.image}
                    alt="data"
                  />
                </a>
                <div className="p-6">
                  <h5 className="text-blue-100 text-lg font-medium mb-2">
                    Inquiry ID: {rowData._id}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    <b>User Email: </b> {rowData.email}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Inquiry Type: </b> {rowData.inquiryType}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Description: </b> {rowData.inquiryDescription}
                  </p>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : pageType === "product" ? (
          <ModalContent>
            <ModalHeader>Product Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="flex flex-col justify-center">
                <Swiper navigation modules={[Navigation]} className="mySwiper">
                  {rowData.images.map((image: any) => (
                    <SwiperSlide>
                      <img
                        className="object-scale-down w-full"
                        src={image}
                        alt="imageSlide"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="p-6">
                  <h5 className="text-blue-100 text-lg font-medium mb-2">
                    Product ID: {rowData._id}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Product Name: </b> {rowData.name}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Product Brand: </b> {rowData.brand}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Category: </b> {rowData.category}
                  </p>
                  <b>Description: </b>
                  <div className="text-gray-700 text-base mb-4 h-[250px] overflow-scroll">
                    {rowData.description}
                  </div>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : pageType === "transaction" ? (
          <ModalContent>
            <ModalHeader>Transaction Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="flex flex-col justify-center">
                <div className="p-6">
                  <h5 className="text-blue-100 text-lg font-medium mb-2">
                    Transaction ID: {rowData._id}
                  </h5>
                  <h5 className="text-blue-100 text-lg font-medium mb-2">
                    <b>Product ID: </b> {rowData.productId}{" "}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Status: </b>{" "}
                    {rowData.status === "paid" ? (
                      <Badge colorScheme="gray">Paid</Badge>
                    ) : rowData.status === "shipped" ? (
                      <Badge colorScheme="green">Shipped</Badge>
                    ) : (
                      <Badge colorScheme="yellow">Pending</Badge>
                    )}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Total: </b> {rowData.total}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>User Email: </b>
                    {rowData.userEmail}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Return date: </b>
                    {rowData.to}
                  </p>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        ) : (
          <ModalContent>
            <ModalHeader>User Detail</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className="flex flex-col justify-center">
                <div className="p-6">
                  <h5 className="text-blue-100 text-lg font-medium mb-2">
                    User ID: {rowData._id}
                  </h5>
                  <h5 className="text-blue-100 text-lg font-medium mb-2">
                    Name: {rowData.name}
                  </h5>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Email: </b> {rowData.email}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Status: </b>{" "}
                    {rowData.status === true ? (
                      <Badge colorScheme="green">Active</Badge>
                    ) : (
                      <Badge colorScheme="red">Deactivated</Badge>
                    )}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Phone Number: </b> {rowData.phone}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Location: </b>
                    {rowData.location}
                  </p>
                  <p className="text-gray-700 text-base mb-4">
                    <b>Return date: </b>
                    {rowData.to}
                  </p>
                </div>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        )}
      </Modal>
    </>
  );
};

export default InquiryModal;
