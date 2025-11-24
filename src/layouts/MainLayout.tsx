// React Router
import {Outlet} from "react-router";
// Components
import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";
import ScrollToTop from "@/components/ui/scroll-to-top/ScrollToTop";
// Main Component
const MainLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
export default MainLayout;
