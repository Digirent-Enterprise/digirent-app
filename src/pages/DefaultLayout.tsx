import React from "react";
import { Footer, NavBar, Transition } from "../components";

const DefaultLayout = ({ children }: any) => {
  return (
    <Transition>
      <NavBar />
      {children}
      <Footer />
    </Transition>
  );
};

export default DefaultLayout;
