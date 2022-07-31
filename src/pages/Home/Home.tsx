import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Transition } from "../../components/elements";
import { getAllUsers } from "../../store/selectors/user.selector";
import { getUsers } from "../../store/actions/user.action";

const Home = () => {
  const userData = useSelector(getAllUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("userdata", userData);
    dispatch(getUsers());
  }, []);

  return (
    <Transition>
      <h3>Welcome to Digirent</h3>
    </Transition>
  );
};

export default Home;
