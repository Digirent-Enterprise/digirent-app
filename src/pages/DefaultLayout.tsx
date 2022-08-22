import React from "react";
import { Footer, LanguageSwitcher, NavBar, Transition } from "../components";

const DefaultLayout = ({ children }: any) => {
  return (
    <Transition>
      <div className="h-screen">
        <NavBar />
        {children}
        <LanguageSwitcher />
        <Footer />
      </div>
    </Transition>
  );
};

export default DefaultLayout;
