import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Home,
  UserProfile,
  ProductSearchPage,
  Maintain,
  NotFound,
  RegisterPage,
  LoginPage,
  ResetPasswordPage,
  ForgotPasswordPage,
  ChatViewPage,
  AdminHome,
  ProductManagement,
  UserFavorite,
  UserManagement,
} from "./pages";
import PrivateRoute from "./components/PrivateRoute";
import { AdminPermission } from "./utils/constants/permission.constants";

const AppRouter = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="logout" />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="send-email" />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        {/* Product */}
        <Route path="products" element={<ProductSearchPage />} />
        <Route path="products/:id" />
        {/* Payment */}
        <Route path="checkout/:id" />
        <Route path="checkout-success/:id" />
        {/* Users */}
        <Route path="users" />
        <Route path="users/:id" />
        <Route path="user/profile" element={<UserProfile />} />
        <Route path="user/favorite" element={<UserFavorite />} />
        <Route path="user/:id/edit" />
        <Route path="user/:id/deactivate" />
        <Route path="user/:id/change-password" />
        {/* Maintain */}
        <Route path="maintain" element={<Maintain />} />
        {/* Admin */}
        <Route
          path="admin"
          element={
            <PrivateRoute permission={AdminPermission}>
              <AdminHome />
            </PrivateRoute>
          }
        />
        {/* User management */}
        <Route
          path="admin/users"
          element={
            // <PrivateRoute permission={AdminPermission}>
            <UserManagement />
          }
        />
        <Route path="admin/users/:id/edit" />
        <Route path="admin/users/:id/delete" />
        {/* Product management */}
        <Route
          path="admin/products"
          element={
            // <PrivateRoute permission={AdminPermission}>
            <ProductManagement />
          }
        />
        <Route path="admin/add-product" />
        <Route path="admin/product/:id" />
        <Route path="admin/products/:id/edit" />
        <Route path="admin/products/:id/delete" />
        {/* Transaction management */}
        <Route path="admin/transactions" />
        <Route path="admin/transactions/:id/edit" />
        <Route path="admin/transactions/:id/delete" />
        {/* Chat */}
        <Route
          path="admin/chat"
          element={
            <PrivateRoute permission={AdminPermission}>
              <ChatViewPage />
            </PrivateRoute>
          }
        />
        <Route path="admin/chat/:id" />
        {/* 404 Not Found Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
