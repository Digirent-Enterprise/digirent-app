import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const PaymentAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" >
                Transfer through bank account
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Please transfer the cost to
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Momo
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
           Please scan this QR to pay
           <img src="/public/images/momoQR.jpg" alt="" />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PaymentAccordion;
