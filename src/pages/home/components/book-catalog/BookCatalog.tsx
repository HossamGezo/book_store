// React
import {useEffect, useState} from "react";
// Styles
import "./book-catalog.css";
// Data
import {books} from "../../data/books";
// Components
import Pagination from "@/components/ui/pagination/Pagination";
import Card from "@/components/ui/card/Card";
import Title from "@/components/ui/title/Title";
// Main Component
const BookCatalog = () => {
  const [page, setPage] = useState(1);
  const [cardsCount, setCardsCount] = useState<5 | 8>(5);
  const [togglePopup, setTogglePopup] = useState(false);
  // Pagination Logic
  useEffect(() => {
    const screenWidth = () => {
      if (window.innerWidth <= 768) {
        setCardsCount(5);
      } else {
        setCardsCount(8);
        if (cardsCount === 5) setPage(4);
      }
    };
    window.addEventListener("resize", screenWidth);
    return () => {
      window.removeEventListener("resize", screenWidth);
    };
  }, [cardsCount]);
  const paginateNumbers = Math.ceil(books.length / cardsCount);
  const catalogBooks = books.slice((page - 1) * cardsCount, page * cardsCount);
  // Return JSX
  return (
    <section className="book-catalog py-10">
      <div className="ccontainer">
        <div className="book-catalog-title flex-center">
          <Title title="Catalog Books" />
        </div>
        <div className="book-catalog-list grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mb-10 place-items-center">
          {catalogBooks.map((book) => (
            <Card
              key={book.id}
              {...book}
              togglePopup={togglePopup}
              setTogglePopup={setTogglePopup}
            />
          ))}
        </div>
        <Pagination
          paginateNumbers={paginateNumbers}
          page={page}
          setPage={setPage}
        />
      </div>
    </section>
  );
};
export default BookCatalog;
