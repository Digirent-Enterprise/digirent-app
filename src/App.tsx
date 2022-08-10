import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Spinner } from "./components";
import AppRouter from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
