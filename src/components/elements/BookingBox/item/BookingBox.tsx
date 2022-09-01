import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { setTransaction } from "../../../../store/actions/transaction.action";
import { getCurrentUserSelector } from "../../../../store/selectors/user.selector";
import { IProduct } from "../../../../store/types/product.types";

interface BookingBoxProps {
  price: number;
  rentalCost: number;
  rentalCostType: string;
  startDate?: Date;
  endDate?: Date;
  productData: IProduct;
}
const BookingBox: React.FC<BookingBoxProps> = ({
  price,
  rentalCost,
  startDate,
  endDate,
  rentalCostType = "day",
  productData,
}) => {
  const { t } = useTranslation();
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const userData = useSelector(getCurrentUserSelector);
  const dispatch = useDispatch();

  const handleRent = () => {
    dispatch(
      setTransaction({
        productId: productData,
        userEmail: userData.email,
        rentalCost: totalPrice,
        deposit: 0,
        status: "pending",
        latePenalty: 0,
        currency: "$",
        from: startDate,
        to: endDate,
      }),
    );
    navigate(`/checkout/${productData._id}`);
  };

  const validateRentPeriodNotNull = () => {
    return (
      (startDate === null && endDate === null) ||
      (startDate === undefined && endDate === undefined)
    );
  };

  useEffect(() => {
    if (price) {
      const diff: any =
        startDate && endDate
          ? Math.abs(startDate.getTime() - endDate.getTime())
          : null;
      const numDateDiff =
        diff / 1000 / 60 / 60 / 24 >= 1
          ? Math.ceil(diff / 1000 / 60 / 60 / 24)
          : 1;
      setTotalPrice(price * numDateDiff);
    }
    console.log("startDate :>> ", startDate);
  }, [startDate, endDate]);

  return (
    <div className="flex flex-col">
      <div className=" w-[300px] rounded-3xl bg-white flex flex-col drop-shadow-[0px_10px_10px_rgba(0,0,0,0.25)]">
        <div className="w-[150px]] flex justify-left ml-7 mt-5 mb-4 gap-1 text-lg ">
          <b>${price}</b>
          <b>/ {rentalCostType}</b>
        </div>
        <div className="flex w-[90%] justify-center items-center ml-4">
          <div className="bg-white w-[50%] h-[60px] flex flex-col rounded-l-xl text-center justify-center border-[1px] border-black ">
            <div>
              <b>{t("BorrowDate")}</b>
            </div>
            <div>{dayjs(startDate).format("DD/MM/YYYY")}</div>
          </div>
          <div className="bg-white w-[50%] h-[60px] flex flex-col rounded-r-xl text-center justify-center border-[1px] border-black">
            <div>
              <b>{t("ReturnDate")}</b>
            </div>
            <div>{dayjs(endDate).format("DD/MM/YYYY")}</div>
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <button
            onClick={
              !validateRentPeriodNotNull()
                ? handleRent
                : () => {
                    toast.warning("Please pick a rent period to proceed!", {
                      theme: "dark",
                    });
                  }
            }
            className="bg-[#1010AE] w-[90%] h-[50px] rounded-xl hover:scale-[1.02] text-white text-lg"
          >
            {t("Rent")}
          </button>
        </div>
        <div className="mt-8">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    <b>{t("ShowCostDetails")}</b>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {t("DepositNone")}
                <br />
                {t("Rental")}
                {rentalCost}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="mt-3 mb-3 ">
          <div className="float-left ml-6 font-bold">{t("EstCost")}</div>
          <div className="float-right mr-6 font-bold">
            ${totalPrice || rentalCost}
          </div>
        </div>
      </div>
      <div className="ml-10 mt-7">
        {t("NeedHelp?")}{" "}
        <a href="/" className="font-bold underline">
          {t("Now")}
        </a>
      </div>
    </div>
  );
};

export default BookingBox;
