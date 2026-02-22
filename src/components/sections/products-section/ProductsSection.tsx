// Components
import ProductsSlider from "@/components/ui/products-slider/ProductsSlider";
import Title from "@/components/ui/title/Title";
import Card from "@/components/ui/card/Card";

// Types
import type { BookType } from "@/types/types";
type ProductsSectionProps = {
  sortedArray: BookType[];
  title: string;
};

// Main Component
const ProductsSection = ({ sortedArray, title }: ProductsSectionProps) => {
  return (
    <>
      <div className="custom-container flex items-center justify-center">
        <Title title={title} />
      </div>
      <ProductsSlider arrayLength={sortedArray.length}>
        {sortedArray.map((book) => (
          <Card key={book.id} {...book} />
        ))}
      </ProductsSlider>
    </>
  );
};

export default ProductsSection;
