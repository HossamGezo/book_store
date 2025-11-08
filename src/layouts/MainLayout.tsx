// React Router
import {Outlet} from "react-router";
// Components
import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";
// Main Component
const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
