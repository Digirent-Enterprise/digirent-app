import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'

interface BookingBoxProps {
  price: number;
  borrow: string;
  returnDate: string;
  rentalCost: number;
  totalPrice: number;
}
const BookingBox: React.FC<BookingBoxProps> = ({
  price,
  borrow,
  returnDate,
  rentalCost,
  totalPrice,
  
}) => {
  
  return (
    <div className="flex flex-col ">
      <div className=" w-[300px] rounded-3xl bg-white flex flex-col drop-shadow-[0px_10px_10px_rgba(0,0,0,0.25)]">
        <div className="w-[150px]] flex justify-left ml-7 mt-5 mb-4 gap-1 text-lg ">
          <b>{price}</b>
          <b>VND</b>/month
        </div>
        <div className="flex w-[90%] justify-center items-center ml-4">
          <div className="bg-white w-[50%] h-[60px] flex flex-col rounded-l-xl text-center justify-center border-[1px] border-black ">
            <div>
              <b>Borrow Date:</b>
            </div>
            <div>{borrow}</div>
          </div>
          <div className="bg-white w-[50%] h-[60px] flex flex-col rounded-r-xl text-center justify-center border-[1px] border-black">
            <div>
              <b>Return Date:</b>
            </div>
            <div>{returnDate}</div>
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <button className="bg-[#1010AE] w-[90%] h-[50px] rounded-xl hover:scale-[1.02] text-white text-lg">
            Rent
          </button>
        </div>
        <div className="mt-8">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex='1' textAlign='left'>
                    <b>Show cost details</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                    Deposit: VND
                    <br/>
                    Rental: {rentalCost}VND
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className=" mt-3 mb-3">
          <div className="float-left ml-6 font-bold">Total cost</div>
          <div className="float-right mr-6 font-bold">{totalPrice} VND</div>
        </div>
      </div>
      <div className="mt-7 ml-10">
        Need help ? Chat with us{" "}
        <a href="#" className="font-bold underline">
          now
        </a>
      </div>
    </div>
  );
};

export default BookingBox;
