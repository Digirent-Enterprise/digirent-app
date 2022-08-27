import React, { lazy, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import {
  Maintain,
  NotFound,
  RegisterPage,
  LoginPage,
  ResetPasswordPage,
  ForgotPasswordPage,
  ChatViewPage,
  AdminHome,
  ProductManagement,
  UserManagement,
  TransactionManagement,
  CheckoutPage,
  EmailSentPage,
  ProductDetailsPage,
  CustomerInquiryManagement,
} from "./pages";
import PrivateRoute from "./components/PrivateRoute";

import {
  AdminPermission,
  FullPermission,
} from "./utils/constants/permission.constants";
import { BackToTop } from "./components";
import { selectAppLoading } from "./store/selectors/app.selector";
import { initApp, setAppAuth } from "./store/actions/app.action";
import { getCurrentUserSelector } from "./store/selectors/user.selector";

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const ContactUsPage = lazy(
  () => import("./pages/CustomerInquiry/CustomerInquiry"),
);
const ProductSearchPage = lazy(
  () => import("./pages/Product/ProductSearchPage"),
);
const AddProduct = lazy(() => import("./pages/Admin/AddProduct/AddProduct"));
const CategoryPage = lazy(() => import("./pages/Category/CategoryPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const UserTransactionDetails = lazy(
  () => import("./pages/User/UserTransactionDetail"),
);
const UserTransactionHistory = lazy(
  () => import("./pages/User/UserTransactionHistory"),
);
const UserEdit = lazy(() => import("./pages/User/UserEdit"));
const UserProfile = lazy(() => import("./pages/User/UserProfile"));
const UserViewInfo = lazy(() => import("./pages/User/UserViewInfo"));
const UserChangePassword = lazy(
  () => import("./pages/User/UserChangePassword"),
);
const UserFavoriteProduct = lazy(
  () => import("./pages/User/UserFavoriteProduct"),
);

const AppRouter = () => {
  const location = useLocation();
  const currentUser = useSelector(getCurrentUserSelector);
  const appLoading = useSelector(selectAppLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!appLoading) {
      dispatch(initApp());
    }
  }, []);
  useEffect(() => {
    if (!currentUser.role) {
      dispatch(setAppAuth("guest"));
      return;
    }
    dispatch(setAppAuth(currentUser.role));
  }, [currentUser]);

  return (
    <AnimatePresence exitBeforeEnter>
      <BackToTop />
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="email-sent" element={<EmailSentPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        {/* Product */}
        <Route path="products" element={<ProductSearchPage />} />
        <Route path="product/:id" element={<ProductDetailsPage />} />
        {/* Payment */}
        <Route path="checkout/:id" element={<CheckoutPage />} />
        <Route path="checkout-success/:id" />
        {/* Users */}
        <Route
          path="user/my-profile"
          element={
            <PrivateRoute permission={FullPermission}>
              <UserProfile />
            </PrivateRoute>
          }
        />
        <Route
          path="user/edit-my-profile"
          element={
            <PrivateRoute permission={FullPermission}>
              <UserEdit />
            </PrivateRoute>
          }
        />
        <Route
          path="user/change-password"
          element={
            <PrivateRoute permission={FullPermission}>
              <UserChangePassword />
            </PrivateRoute>
          }
        />
        <Route
          path="user/view-my-profile"
          element={
            <PrivateRoute permission={FullPermission}>
              <UserViewInfo />
            </PrivateRoute>
          }
        />
        <Route
          path="user/favorite-product"
          element={
            <PrivateRoute permission={FullPermission}>
              <UserFavoriteProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="transaction/transaction-history"
          element={
            <PrivateRoute permission={FullPermission}>
              <UserTransactionHistory />
            </PrivateRoute>
          }
        />
        <Route
          path="transaction/:id"
          element={
            <PrivateRoute permission={FullPermission}>
              <UserTransactionDetails />
            </PrivateRoute>
          }
        />
        <Route path="privacy" element={<PrivacyPolicy />} />
        {/* Maintain */}
        <Route path="maintain" element={<Maintain />} />
        {/* Contact */}
        <Route path="contact" element={<ContactUsPage />} />
        {/* Category */}
        <Route path="category" element={<CategoryPage />} />
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
        {/* Product management */}

        <Route
          path="admin/products"
          element={
            <PrivateRoute permission={AdminPermission}>
              <ProductManagement />
            </PrivateRoute>
          }
        />

        {/* Product management */}
        <Route
          path="admin/inquiries"
          element={
            <PrivateRoute permission={AdminPermission}>
              <CustomerInquiryManagement />
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
        {/* Transaction management */}
        <Route
          path="admin/transactions"
          element={
            <PrivateRoute permission={AdminPermission}>
              <TransactionManagement />
            </PrivateRoute>
          }
        />
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
