import React from "react";
import { Footer, LanguageSwitcher, NavBar, Transition } from "../components";

const DefaultLayout = ({ children }: any) => {
  return (
    <Transition>
      <NavBar />
      {children}
      <LanguageSwitcher />
      <Footer />
    </Transition>
  );
};

export default DefaultLayout;
