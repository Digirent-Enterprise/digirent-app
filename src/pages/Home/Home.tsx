import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../DefaultLayout";
import { getProducts } from "../../store/actions/product.action";
import { getAllProducts } from "../../store/selectors/product.selector";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector(getAllProducts);
  useEffect(() => {
    dispatch(getProducts());
    console.log("productdata", data);
  }, []);

  return <DefaultLayout>Hi</DefaultLayout>;
};

export default Home;
