// React
import {useState} from "react";
// Components
import ProductsSlider from "@/components/ui/products-slider/ProductsSlider";
import Title from "@/components/ui/title/Title";
import Card from "@/components/ui/card/Card";
// Types
import type {BooksProps} from "@/types";
type ProductionSectionProps = {
  sortedArray: BooksProps[];
  title: string;
};
// Main Component
const ProductsSection = ({sortedArray, title}: ProductionSectionProps) => {
  const [togglePopup, setTogglePopup] = useState(false);
  return (
    <>
      <div className="ccontainer flex-center">
        <Title title={title} />
      </div>
      <ProductsSlider arrayLength={sortedArray.length}>
        {sortedArray.map((book) => (
          <Card
            key={book.id}
            {...book}
            togglePopup={togglePopup}
            setTogglePopup={setTogglePopup}
          />
        ))}
      </ProductsSlider>
    </>
  );
};

export default ProductsSection;
