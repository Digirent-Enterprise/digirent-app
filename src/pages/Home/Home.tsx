import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/product.action";
import { getAllProducts } from "../../store/selectors/product.selector";
import { getUserDetail } from "../../store/actions/user.action";
import { Banner, CTA, Spinner } from "../../components";

const Home = () => {
  const dispatch = useDispatch();

  const data = useSelector(getAllProducts);

  const DefaultLayout = React.lazy(() => import("../DefaultLayout"));

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
