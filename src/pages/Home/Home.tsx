import {
  Banner,
  CategoryCardListing,
  CTA,
  FeatureProduct,
  NewProduct,
  ProductProgressBar,
  Testimonial,
} from "../../components";
import Helmet from "../../Helmet";
import DefaultLayout from "../DefaultLayout";

const Home = () => {
  return (
    <DefaultLayout>
      <Helmet
        title="Homepage"
        addPostfixTitle
        description="Digirent marketplace"
      />
      <Banner />
      <CategoryCardListing />
      <NewProduct />
      <FeatureProduct />
      <ProductProgressBar />
      <Testimonial />
      <CTA />
    </DefaultLayout>
  );
};

export default Home;
