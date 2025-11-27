// React Router
import {Outlet} from "react-router";
// Components
import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";
import ScrollToTop from "@/components/ui/scroll-to-top/ScrollToTop";
import PopupContextProvider from "@/context/PopupContext";
import CartContextProvider from "@/context/CartContext";
// Main Component
const MainLayout = () => {
  return (
    <CartContextProvider>
      <PopupContextProvider>
        <ScrollToTop />
        <Header />
        <Outlet />
        <Footer />
      </PopupContextProvider>
    </CartContextProvider>
  );
};
export default MainLayout;
