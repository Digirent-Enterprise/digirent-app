import {
  Banner,
  CTA,
  FeatureProduct,
  NewProduct,
  ProductProgressBar,
  Testimonial,
  CategoryCardListing,
  ChatBox,
  StripePayment,
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
      <StripePayment />
      <ChatBox />
    </DefaultLayout>
  );
};

export default Home;
