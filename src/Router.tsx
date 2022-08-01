import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Home,
  UserProfile,
  UserManagement,
  ProductManagement,
  TransactionManagement,
  ProductSearchPage,
  Maintain,
  NotFound,
  RegisterPage,
  LoginPage,
  ChatViewPage,
  AdminHome,
} from "./pages";
import PrivateRoute from "./components/PrivateRoute";

const AppRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" />
        <Route path="register" element={<RegisterPage />} />
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
        <Route path="users/profile" element={<UserProfile />} />
        <Route path="users/:id/favorite-products" />
        <Route path="users/:id/edit" />
        <Route path="users/:id/deactivate" />
        <Route path="users/:id/change-password" />
        {/* Maintain */}
        <Route path="maintain" element={<Maintain />} />
        {/* Admin */}
        <Route path="admin" element={<AdminHome />} />
        {/* User management */}
        <Route
          path="admin/users"
          element={
            <PrivateRoute>
              <UserManagement />
            </PrivateRoute>
          }
        />
        <Route path="admin/users/:id/edit" />
        <Route path="admin/users/:id/delete" />
        {/* Product management */}
        <Route path="admin/products" element={<ProductManagement />} />
        <Route path="admin/add-product" />
        <Route path="admin/product/:id" />
        <Route path="admin/products/:id/edit" />
        <Route path="admin/products/:id/delete" />
        {/* Transaction management */}
        <Route path="admin/transactions" element={<TransactionManagement />} />
        <Route path="admin/transactions/:id/edit" />
        <Route path="admin/transactions/:id/delete" />
        {/* Chat */}
        <Route path="admin/chat" element={<ChatViewPage />} />
        <Route path="admin/chat/:id" />
        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
