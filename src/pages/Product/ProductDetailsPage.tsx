import React, {useEffect} from "react";
import {
  BookingBoxDisplay,
  GalleryDisplay,
  ProductSummaryDisplay,
  StaticGoogleMap,
} from "../../components";
import DefaultLayout from "../DefaultLayout";
import {useDispatch, useSelector} from "react-redux";
import {getProductByID as selectProductById} from "../../store/selectors/product.selector";
import {IProduct} from "../../store/types/product.types";
import {useParams} from "react-router-dom";
import {getProductByID} from "../../store/actions/product.action";

const ProductDetailsPage = () => {
    const {id} = useParams();
    const selectedProduct = useSelector(selectProductById)
    const dispatch = useDispatch()
    useEffect(() => {
        if (id) {
            dispatch(getProductByID(id))
        }
    }, [id])
  return (
    <DefaultLayout>
        { selectedProduct && (<>
            <ProductSummaryDisplay name={selectedProduct.name}/>
            <GalleryDisplay productData={{images: selectedProduct.images}}/>
            <div className="w-full">
            <BookingBoxDisplay {...selectedProduct} />
            </div>
            <div className="mt-10">
            <StaticGoogleMap />
            </div></>)}
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
