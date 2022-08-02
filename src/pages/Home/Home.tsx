import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar, Footer } from "../../components";
import { Transition } from "../../components/elements";
import { getUserDetail } from "../../store/actions/user.action";
import { getCurrentUser } from "../../store/selectors/user.selector";

const Home = () => {
  const dispatch = useDispatch();
  const getDetail = useSelector(getCurrentUser);

  useEffect(() => {
    dispatch(getUserDetail());
    console.log("getDetail", getDetail);
  }, []);

  return (
    <Transition>
      <NavBar />
      <Footer />
    </Transition>
  );
};

export default Home;
