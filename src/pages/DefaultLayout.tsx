import React from "react";
import { Footer, LanguageSwitcher, NavBar, Transition } from "../components";

const DefaultLayout = ({ children }: any) => {
  return (
    <Transition>
      <div className="flex flex-col h-screen">
        <NavBar />
        <div className="flex-grow">{children}</div>
        <LanguageSwitcher />
        <Footer />
      </div>
    </Transition>
  );
};

export default DefaultLayout;
