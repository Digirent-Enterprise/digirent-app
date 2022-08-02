import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar, Footer } from "../../components";
import { Transition } from "../../components/elements";
import { getProducts } from "../../store/actions/product.action";
import { getAllProducts } from "../../store/selectors/product.selector";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector(getAllProducts);
  useEffect(() => {
    dispatch(getProducts());
    console.log("productdata", data);
  }, []);

  return (
    <Transition>
      <NavBar />
      <Footer />
    </Transition>
  );
};

export default Home;
