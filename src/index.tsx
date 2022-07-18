import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
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
        <Route path="products/:_id" />
        {/* Payment */}
        <Route path="checkout/:_id" />
        <Route path="checkout-success/:_id" />
        {/* Users */}
        <Route path="users" />
        <Route path="users/:_id" />
        <Route path="users/:_id/profile" />
        <Route path="users/:_id/favorite-products" />
        <Route path="users/:_id/edit" />
        <Route path="users/:_id/deactivate" />
        <Route path="users/:_id/change-password" />
        {/* Admin */}
        <Route path="admin" />
        {/* User management */}
        <Route path="admin/users" />
        {/* <Route path="admin/users/:_id/edit" /> */}
        <Route path="admin/users/:_id/delete" />
        {/* Product management */}
        <Route path="admin/products" />
        <Route path="admin/add-product" />
        <Route path="admin/product/:_id" />
        <Route path="admin/products/:_id/edit" />
        <Route path="admin/products/:_id/delete" />
        {/* Transaction management */}
        <Route path="admin/transactions" />
        {/* <Route path="admin/transactions/:_id/edit" /> */}
        <Route path="admin/transactions/:_id/delete" />
        {/* Chat */}
        <Route path="admin/chat" />
        <Route path="admin/chat/:_id" />
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
  </React.StrictMode>,
);
