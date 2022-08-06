import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout from "../DefaultLayout";
import { getProducts } from "../../store/actions/product.action";
import { getAllProducts } from "../../store/selectors/product.selector";
import { getUserDetail } from "../../store/actions/user.action";
import { Banner } from "../../components";

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
      <Link to="/admin/products">Admin Product</Link>
      <Banner />
    </DefaultLayout>
  );
};

export default Home;
