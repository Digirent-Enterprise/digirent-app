import React from "react";
import { Transition } from "../../components/elements";
import { NavBar, Footer, UserTab } from "../../components";

const UserProfile = () => {
  return (
    <Transition>
      <NavBar />
      <UserTab />
      <Footer />
    </Transition>
  );
};

export default UserProfile;
