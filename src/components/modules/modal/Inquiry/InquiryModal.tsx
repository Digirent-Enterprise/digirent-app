import {
  Button,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import emailJsService from "../../../../utils/email/emailJsService";

const InquiryModal = ({ onClose, onOpen, isOpen, rowData }: any) => {
  const [mailContent, setMailContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value;
    setMailContent(inputValue);
  };

  const handleSendEmail = (mail: any) => {
    setLoading(true);
    const preparedData = {
      inquiry_id: rowData._id,
      mail_content: mail,
      to_name: rowData.email,
      to_email: rowData.email,
    };
    
    emailJsService(preparedData).then((res) => {
      if (res.status === 200) {
        toast.success("Email sent successfully!", {
          theme: "dark",
          icon: "🚀",
        });
        setLoading(false);
        onClose();
      } else {
        toast.warning(
          `${res.status} error, failed to send email to customer!`,
          {
            theme: "dark",
          },
        );
        setLoading(false);
        onClose();
      }
    });
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="yellow">
        Respond
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Send respond email to customer</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Mail content</FormLabel>
              <Textarea onChange={(e) => handleInputChange(e)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              isLoading={loading}
              onClick={() => {
                handleSendEmail(mailContent);
              }}
            >
              Send email
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default InquiryModal;
