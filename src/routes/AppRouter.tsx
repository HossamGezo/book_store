// Libraries
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

// Components
import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/home/Home";
import NotFound from "@/pages/error/NotFound";

// Lazy Loading Pages
const BookDetails = React.lazy(
  () => import("@/pages/book-details/BookDetails"),
);
const Cart = React.lazy(() => import("@/pages/cart/Cart"));
const Authors = React.lazy(() => import("@/pages/authors/Authors"));
const About = React.lazy(() => import("@/pages/about/About"));
const Contact = React.lazy(() => import("@/pages/contact/Contact"));
const Register = React.lazy(() => import("@/pages/auth/Register"));
const Login = React.lazy(() => import("@/pages/auth/Login"));
const ResetPassword = React.lazy(() => import("@/pages/auth/ResetPassword"));

// App Routes
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      {
        path: "book/:id",
        Component: BookDetails,
      },
      {
        path: "cart",
        Component: Cart,
      },
      {
        path: "authors",
        Component: Authors,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      },
      { path: "*", Component: NotFound },
    ],
  },
]);

// Main Component
const AppRouter = () => {
  return <RouterProvider router={router} />;
};
export default AppRouter;
