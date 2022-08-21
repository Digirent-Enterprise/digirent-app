import React from "react";
import BookingBoxLayout from "./layout/BookingBoxLayout";
import {IProduct} from "../../../store/types/product.types";

const BookingBoxDisplay = (props: IProduct) => {


  return <BookingBoxLayout productData={props} />;
};

export default BookingBoxDisplay;
