// Components
import HeroSection from "./components/hero-section/HeroSection";
import Services from "./components/services/Services";
import MostGifted from "./components/most-gifted/MostGifted";
import BookCatalog from "./components/book-catalog/BookCatalog";
import TopRated from "./components/top-rated/TopRated";
// Main Component
const Home = () => {
  // Return JSX
  return (
    <>
      <HeroSection />
      <Services />
      <MostGifted />
      <BookCatalog />
      <TopRated />
    </>
  );
};
export default Home;
