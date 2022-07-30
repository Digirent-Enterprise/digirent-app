import { Transition } from "../../components/elements";
import { NavBar } from "../../components/layouts";

const Home = () => {
  return (
    <Transition>
      <NavBar />
      <h3>Welcome to Digirent</h3>
    </Transition>
  );
};

export default Home;
