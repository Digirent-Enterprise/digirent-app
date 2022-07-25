import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";

import App from "./App";
import store from "./store";
import {
  UserManagement,
  ProductManagement,
  TransactionManagement,
  ProductSearchPage,
  Maintain,
  NotFound,
} from "./pages";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="login" />
              <Route path="logout" />
              <Route path="register" />
              <Route path="reset-password" />
              <Route path="send-email" />
              <Route path="forgot-password" />
              {/* Product */}
              <Route path="products" element={<ProductSearchPage />} />
              <Route path="products/?category=phone" />
              <Route path="products/:id" />
              {/* Payment */}
              <Route path="checkout/:id" />
              <Route path="checkout-success/:id" />
              {/* Users */}
              <Route path="users" />
              <Route path="users/:id" />
              <Route path="users/:id/profile" />
              <Route path="users/:id/favorite-products" />
              <Route path="users/:id/edit" />
              <Route path="users/:id/deactivate" />
              <Route path="users/:id/change-password" />
              {/* Maintain */}
              <Route path="maintain" element={<Maintain />} />
            </Route>
            {/* Admin */}
            <Route path="admin">
              {/* User management */}
              <Route path="users" element={<UserManagement />} />
              <Route path="users/:id/edit" />
              <Route path="users/:id/delete" />
              {/* Product management */}
              <Route path="products" element={<ProductManagement />} />
              <Route path="add-product" />
              <Route path="product/:id" />
              <Route path="products/:id/edit" />
              <Route path="products/:id/delete" />
              {/* Transaction management */}
              <Route path="transactions" element={<TransactionManagement />} />
              <Route path="transactions/:id/edit" />
              <Route path="transactions/:id/delete" />
              {/* Chat */}
              <Route path="chat" />
              <Route path="chat/:id" />
            </Route>

            {/* 404 Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
);
