import { useTranslation } from "react-i18next";
import { Content, Teams, Technology } from "../../components";
import Helmet from "../../Helmet";
import DefaultLayout from "../DefaultLayout";

const About = () => {
  const {t} = useTranslation();
  return (
    <DefaultLayout>
      <Helmet
        title={t("About")}
        addPostfixTitle
        description={t("AboutHelmetDes")}
      />
      <Content />
      <Technology />
      <Teams />
    </DefaultLayout>
  );
};

export default About;
