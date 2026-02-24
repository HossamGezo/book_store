// Libraries
import { useLocation } from "react-router";

// Skeletons
import AuthorsSkeleton from "@/pages/authors/AuthorsSkeleton";
import AboutSkeleton from "@/pages/about/AboutSkeleton";
import ContactSkeleton from "@/pages/contact/ContactSkeleton";
import RegisterSkeleton from "@/pages/auth/RegisterSkeleton";
import LoginSkeleton from "@/pages/auth/LoginSkeleton";
import ResetPasswordSkeleton from "@/pages/auth/ResetPasswordSkeleton";
import BookDetailsSkeleton from "@/pages/book-details/BookDetailsSkeleton";
import CartSkeleton from "@/pages/cart/CartSkeleton";

// Main Component
const PageLoader = () => {
  const { pathname } = useLocation();
  if (pathname.includes("/authors")) return <AuthorsSkeleton />;
  if (pathname.includes("/about")) return <AboutSkeleton />;
  if (pathname.includes("/contact")) return <ContactSkeleton />;
  if (pathname.includes("/register")) return <RegisterSkeleton />;
  if (pathname.includes("/login")) return <LoginSkeleton />;
  if (pathname.includes("/reset-password")) return <ResetPasswordSkeleton />;
  if (pathname.includes("/book/")) return <BookDetailsSkeleton />;
  if (pathname.includes("/cart")) return <CartSkeleton />;
  return null;
};

export default PageLoader;
