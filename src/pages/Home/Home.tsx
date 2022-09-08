  import { useTranslation } from "react-i18next";
import {
  Banner,
  CTA,
  NewProduct,
  ProductProgressBar,
  Testimonial,
  CategoryCardListing,
  FAQ,
  Partner,
  Search,
  Chatbox,
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
      <Chatbox />
      <Banner />
      <CategoryCardListing />
      <Search />
      <NewProduct />
      <ProductProgressBar />
      <Partner />
      <Testimonial />
      <FAQ />
      <CTA />
    </DefaultLayout>
  );
};

export default Home;
