import { Transition } from "../../components/elements";
import { NavBar } from "../../components/layouts";
import { Footer } from "../../components/layouts/footer/Footer";

const Home = () => {
  return (
    <Transition>
      <NavBar />
      <h3>Welcome to Digirent</h3>
      <Footer />
    </Transition>
  );
};

export default Home;
