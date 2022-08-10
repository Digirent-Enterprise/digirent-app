import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProducts } from "../../store/actions/product.action";
import { getAllProducts } from "../../store/selectors/product.selector";
import { getUserDetail } from "../../store/actions/user.action";
import { Banner, CTA } from "../../components";
import DefaultLayout from "../DefaultLayout";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector(getAllProducts);

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getUserDetail());
    console.log("data", data);
  }, []);

  return (
    <Suspense fallback={<Spinner />}>
      <DefaultLayout>
        <Banner />
        <CTA />
      </DefaultLayout>
    </Suspense>
  );
};

export default Home;
