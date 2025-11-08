// React Router
import {createBrowserRouter, RouterProvider} from "react-router";
// Components
import MainLayout from "@/layouts/MainLayout";
import BookDetails from "@/pages/book-details/BookDetails";
import Error from "@/pages/error/Error";
import Home from "@/pages/home/Home";
import Authors from "@/pages/authors/Authors";
import About from "@/pages/about/About";
import Contact from "@/pages/contact/Contact";
import Register from "@/pages/register/Register";
import Login from "@/pages/login/Login";
// Main Component
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      errorElement: <Error />,
      children: [
        {index: true, Component: Home},
        {
          path: "book/:id",
          Component: BookDetails,
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRouter;
