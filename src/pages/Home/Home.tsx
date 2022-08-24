import {
  Banner,
  CTA,
  FeatureProduct,
  NewProduct,
  ProductProgressBar,
  Testimonial,
  CategoryCardListing,
  FAQ,
  Partner,
  Search,
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
      <Search />
      <NewProduct />
      <FeatureProduct />
      <ProductProgressBar />
      <Partner />
      <Testimonial />
      <FAQ />
      <CTA />
    </DefaultLayout>
  );
};

export default Home;
