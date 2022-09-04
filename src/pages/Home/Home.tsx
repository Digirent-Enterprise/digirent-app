import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  return (
    <DefaultLayout>
      <Helmet
        title={t("HomeHelmetTitle")}
        addPostfixTitle
        description={t("HomeHelmetDes")}
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
