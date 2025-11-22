// Components
import HeroSection from "./components/hero-section/HeroSection";
import MostGifted from "./components/most-gifted/MostGifted";
import Services from "./components/services/Services";
import TopRated from "./components/top-rated/TopRated";
// Main Component
const Home = () => {
  // Return JSX
  return (
    <>
      <HeroSection />
      <Services />
      <MostGifted />
      <TopRated />
    </>
  );
};
export default Home;
