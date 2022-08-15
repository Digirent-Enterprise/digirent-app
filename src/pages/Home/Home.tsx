import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
    <DefaultLayout>
      <Link to="/product/62f3935b221c2c3f68908f4d">run here</Link>
      <Banner />
      <CTA />
    </DefaultLayout>
  );
};

export default Home;
