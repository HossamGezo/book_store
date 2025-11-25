// Custom Hook
import {usePopupContext} from "@/context/PopupContext";
// Components
import HeroSection from "./components/hero-section/HeroSection";
import Services from "./components/services/Services";
import MostGifted from "./components/most-gifted/MostGifted";
import BookCatalog from "./components/book-catalog/BookCatalog";
import TopRated from "./components/top-rated/TopRated";
import Popup from "@/components/ui/popup/Popup";
// Main Component
const Home = () => {
  // Use Custom Hook Popup Context
  const {togglePopup} = usePopupContext();
  // Return JSX
  return (
    <>
      <HeroSection />
      <Services />
      <MostGifted />
      <BookCatalog />
      <TopRated />
      {togglePopup.isOpen && <Popup />}
    </>
  );
};
export default Home;
