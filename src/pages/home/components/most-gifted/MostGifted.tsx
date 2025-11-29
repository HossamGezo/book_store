// Data
import {books} from "../../data/books";
// Component
import ProductsSection from "@/components/sections/products-section/ProductsSection";
// Main Component
const MostGifted = () => {
  const mostGiftedBooks = books.sort((a, b) => b.reviews - a.reviews);
  return (
    <section className="most-gifted py-10 bg-blue-100/25">
      <ProductsSection title="Most Gifted" sortedArray={mostGiftedBooks} />
    </section>
  );
};

export default MostGifted;
