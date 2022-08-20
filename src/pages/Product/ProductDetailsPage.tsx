import { useEffect, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  StaticGoogleMap,
} from "../../components";
import DefaultLayout from "../DefaultLayout";
import { getProductByID } from "../../store/actions/product.action";
import { getProductByID as getProductByIDSel, getProductError } from "../../store/selectors/product.selector";
import ProductSummaryLayout from "../../components/modules/productSummary/layout/ProductSummaryLayout";
import GalleryLayout from "../../components/modules/gallery/Layout/GalleryLayout";
import BookingBoxLayout from "../../components/elements/BookingBox/layout/BookingBoxLayout";

const ProductDetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const productByIDFetchData = useSelector(getProductByIDSel);
  const productByIDError = useSelector(getProductError);

  useEffect(() => {
    if (id) {
      dispatch(getProductByID(id));
    }
  }, [id]);

  useEffect(() => {
    if (productByIDError){
      navigate("../../404")
    }
  }, [productByIDError])

  const productDataById = useMemo(
    () => productByIDFetchData,
    [productByIDFetchData],
  );
  return (
    <DefaultLayout>
      <ProductSummaryLayout productData={productDataById}/>
      <GalleryLayout productData={productDataById} />
      <div className="w-full">
        <BookingBoxLayout productData={productDataById} />
      </div>
      <div className="mt-10">
        <StaticGoogleMap />
      </div>
    </DefaultLayout>
  );
};

export default ProductDetailsPage;
