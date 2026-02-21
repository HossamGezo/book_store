// Libraries
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

// Components
import Footer from "@/layouts/footer/Footer";
import Header from "@/layouts/header/Header";
import ScrollToTop from "@/components/ui/scroll-to-top/ScrollToTop";
import PopupContextProvider from "@/context/PopupContext";
import CartContextProvider from "@/context/CartContext";
import { Suspense } from "react";

// Main Component
const MainLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <Toaster />
      <CartContextProvider>
        <PopupContextProvider>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="grow flex flex-col">
              <Suspense
                fallback={
                  <div className="grow flex items-center justify-center">
                    <div>Loading...</div>
                  </div>
                }
              >
                <Outlet />
              </Suspense>
            </main>
          </div>
          <Footer />
        </PopupContextProvider>
      </CartContextProvider>
    </div>
  );
};
export default MainLayout;
