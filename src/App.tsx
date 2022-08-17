import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Spinner } from "./components";
import AppRouter from "./Router";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Spinner />}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>
      <ToastContainer autoClose={3000} style={{ width: "350px" }} />
    </>
  );
};

export default App;
