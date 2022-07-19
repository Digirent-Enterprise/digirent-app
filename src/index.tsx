import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" />
          <Route path="logout" />
          <Route path="register" />
          <Route path="reset-password" />
          <Route path="send-email" />
          <Route path="forgot-password" />
          {/* Product */}
          <Route path="products" />
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
          {/* Admin */}
          <Route path="admin" />
          {/* User management */}
          <Route path="admin/users" />
          <Route path="admin/users/:id/edit" />
          <Route path="admin/users/:id/delete" />
          {/* Product management */}
          <Route path="admin/products" />
          <Route path="admin/add-product" />
          <Route path="admin/product/:id" />
          <Route path="admin/products/:id/edit" />
          <Route path="admin/products/:id/delete" />
          {/* Transaction management */}
          <Route path="admin/transactions" />
          <Route path="admin/transactions/:id/edit" />
          <Route path="admin/transactions/:id/delete" />
          {/* Chat */}
          <Route path="admin/chat" />
          <Route path="admin/chat/:id" />
          {/* 404 Not Found Route */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There is nothing here!</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
