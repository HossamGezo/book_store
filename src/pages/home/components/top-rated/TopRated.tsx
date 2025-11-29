// Data
import {books} from "../../data/books";
// Component
import ProductsSection from "@/components/sections/products-section/ProductsSection";
// Main Component
const TopRated = () => {
  const TopRatedBooks = books.sort((a, b) => b.rating - a.rating);
  return (
    <section className="most-gifted py-10 bg-blue-100/25">
      <ProductsSection title="Top Rated" sortedArray={TopRatedBooks} />
    </section>
  );
};

export default TopRated;
