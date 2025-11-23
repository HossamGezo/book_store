// React
import {useState} from "react";
// Components
import HeroSection from "./components/hero-section/HeroSection";
import Services from "./components/services/Services";
import MostGifted from "./components/most-gifted/MostGifted";
import BookCatalog from "./components/book-catalog/BookCatalog";
import TopRated from "./components/top-rated/TopRated";
import Popup from "@/components/ui/popup/Popup";
// Main Component
const Home = () => {
  // popUp State
  const [togglePopup, setTogglePopup] = useState({isOpen: false, id: 1});
  // Return JSX
  return (
    <>
      <HeroSection />
      <Services />
      <MostGifted />
      <BookCatalog />
      <TopRated />
      {togglePopup.isOpen && (
        <Popup togglePopup={togglePopup} setTogglePopup={setTogglePopup}>
          {togglePopup.id}
        </Popup>
      )}
    </>
  );
};
export default Home;
