import {
  Banner,
  CTA,
  FeatureProduct,
  NewProduct,
  ProductProgressBar,
  Testimonial,
} from "../../components";
import DefaultLayout from "../DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <Banner />
      <NewProduct />
      <FeatureProduct />
      <ProductProgressBar />
      <Testimonial />
      <CTA />
    </DefaultLayout>
  );
};

export default Home;
