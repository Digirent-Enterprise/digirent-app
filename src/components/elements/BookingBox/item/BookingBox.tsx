import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../../../../store/types/product.types";
import { setTransaction } from "../../../../store/actions/transaction.action";
import { getCurrentUserSelector } from "../../../../store/selectors/user.selector";

interface BookingBoxProps {
  price: number;
  borrow: string;
  returnDate: string;
  rentalCost: number;
  totalPrice: number;
  product: IProduct;
}

const BookingBox: React.FC<BookingBoxProps> = ({
  price,
  borrow,
  returnDate,
  rentalCost,
  totalPrice,
  product,
}) => {
  const navigate = useNavigate();
  const userData = useSelector(getCurrentUserSelector);
  const formatDate = (dateString: string) => {
    return new Date(dayjs(dateString).format());
  };
  const handleRent = () => {
    dispatch(
      setTransaction({
        productId: product._id,
        _id: "",
        userEmail: userData.email,
        rentalCost: totalPrice,
        deposit: 0,
        status: "pending",
        latePenalty: 0,
        currency: "VND",
        from: formatDate(borrow),
        to: formatDate(returnDate),
        productImageUrl: product.images[0],
      }),
    );
    navigate(`/checkout/${product._id}`);
  };
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col">
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
          <button
            onClick={handleRent}
            className="bg-[#1010AE] w-[90%] h-[50px] rounded-xl hover:scale-[1.02] text-white text-lg"
          >
            Rent
          </button>
        </div>
        <div className="mt-8">
          <Accordion defaultIndex={[0]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b>Show cost details</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Deposit: VND
                <br />
                Rental: {rentalCost}VND
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-3 mb-3 ">
          <div className="float-left ml-6 font-bold">Total cost</div>
          <div className="float-right mr-6 font-bold">{totalPrice} VND</div>
        </div>
      </div>
      <div className="ml-10 mt-7">
        Need help ? Chat with us{" "}
        <a href="/" className="font-bold underline">
          now
        </a>
      </div>
    </div>
  );
};

export default BookingBox;
