import { Footer, NavBar } from "../components";

const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
