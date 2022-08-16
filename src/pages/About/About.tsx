import { Content, Teams, Technology } from "../../components";
import Helmet from "../../Helmet";
import DefaultLayout from "../DefaultLayout";

const About = () => {
  return (
    <DefaultLayout>
      <Helmet
        title="About"
        addPostfixTitle
        description="A about page to discover our motivation and meet our team."
      />
      <Content />
      <Technology />
      <Teams />
    </DefaultLayout>
  );
};

export default About;
