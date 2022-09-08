import React, { Suspense, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Spinner } from "./components"; 
import AppRouter from "./Router";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [members, setMembers] = useState([]);
  const [messages, setMessages] = useState([]);
  const [privateMessages, setPrivateMessages] = useState({});
  const [newMessage, setNewMessage] = useState({});
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
