import React from "react";

interface BookingBoxProps {
  price: number;
  borrow: string;
  returnDate: string;
  totalPrice: number;
}
const BookingBox: React.FC<BookingBoxProps> = ({
  price,
  borrow,
  returnDate,
  totalPrice,
}) => {
  return (
    <div className="">
      <div className="h-[330px] w-[350px] rounded-3xl bg-white flex flex-col drop-shadow-[0px_10px_10px_rgba(0,0,0,0.25)]">
        <div className="w-[150px]] flex justify-left ml-7 mt-5 mb-4 gap-1 text-lg ">
          <b>$</b>
          <b>{price}</b>/month
        </div>
        <div className="flex w-full justify-center ">
          <div className="bg-white w-[150px] h-[60px] flex flex-col rounded-l-xl text-center justify-center border-[1px] border-black ">
            <div>
              <b>Borrow Date:</b>
            </div>
            <div>{borrow}</div>
          </div>
          <div className="bg-white w-[150px] h-[60px] flex flex-col rounded-r-xl text-center justify-center border-[1px] border-black">
            <div>
              <b>Return Date:</b>
            </div>
            <div>{returnDate}</div>
          </div>
        </div>
        <div className="flex justify-center mt-7">
          <button className="bg-[#1010AE] w-[300px] h-[50px] rounded-xl hover:scale-[1.02] text-white text-lg">
            Rent
          </button>
        </div>
        <div className="mt-4 ml-7">
          <label htmlFor="costSelect" className="font-bold underline">
            Show cost details
          </label>
          <select name="" id="costSelect" className="h-[25px] float-none" />
        </div>
        <hr className="mt-5 ml-6 w-[300px] " />
        <div className="mt-6">
          <div className="float-left ml-6 font-bold">Total cost</div>
          <div className="float-right mr-6 font-bold">$ {totalPrice}</div>
        </div>
      </div>
      <div className="mt-7 ml-9">
        Need help ? Chat with us{" "}
        <a href="" className="font-bold underline">
          now
        </a>
      </div>
    </div>
  );
};

export default BookingBox;
