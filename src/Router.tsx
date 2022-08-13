import React, { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  UserProfile,
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
  TransactionManagement,
  CheckoutPage,
  EmailSentPage,
  ContactUsPage,
} from "./pages";

import PrivateRoute from "./components/PrivateRoute";

import { AdminPermission } from "./utils/constants/permission.constants";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductSearchPage = lazy(
  () => import("./pages/Product/ProductSearchPage"),
);
const AddProduct = lazy(() => import("./pages/Admin/AddProduct/AddProduct"));

const AppRouter = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="email-sent" element={<EmailSentPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        {/* Product */}
        <Route path="products" element={<ProductSearchPage />} />
        <Route path="product/:id" />
        {/* Payment */}
        <Route path="checkout/:id" element={<CheckoutPage />} />
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
        {/* Contact */}
        <Route path="contact" element={<ContactUsPage />} />
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
            <PrivateRoute permission={AdminPermission}>
              <UserManagement />
            </PrivateRoute>
          }
        />
        <Route path="admin/users/:id/edit" />
        <Route path="admin/users/:id/delete" />
        {/* Product management */}
        <Route
          path="admin/products"
          element={
            <PrivateRoute permission={AdminPermission}>
              <ProductManagement />
            </PrivateRoute>
          }
        />
        <Route
          path="admin/add-product"
          element={
            <PrivateRoute permission={AdminPermission}>
              <AddProduct />
            </PrivateRoute>
          }
        />
        <Route path="admin/product/:id" />
        <Route path="admin/products/:id/edit" />
        <Route path="admin/products/:id/delete" />
        {/* Transaction management */}
        <Route
          path="admin/transactions"
          element={
            <PrivateRoute permission={AdminPermission}>
              <TransactionManagement />
            </PrivateRoute>
          }
        />
        <Route path="admin/transactions/:id/edit" />
        <Route path="admin/transactions/:id/delete" />
        {/* Chat */}
        <Route
          path="admin/chat"
          element={
            // <PrivateRoute permission={AdminPermission}>
            <ChatViewPage />
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
