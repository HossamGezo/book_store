// Libraries
import { useState } from "react";
import { useParams } from "react-router";

// React Icons
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { GrLanguage } from "react-icons/gr";
import { HiCalendarDateRange } from "react-icons/hi2";

// Data
import { books } from "../home/data/books";
import Rating from "@/components/ui/rating/Rating";
import Button from "@/components/ui/buttons/Button";

// Custom Hooks
import { useCartContext } from "@/context/CartContext";

// Main Component
const BookDetails = () => {
  // React Hooks
  const [quantity, setQuantity] = useState<number>(1);
  // Custom Hooks
  const { dispatch } = useCartContext();
  // addToCart Function
  const addToCart = (id: number) => {
    const amountToAdd = quantity < 1 ? 1 : quantity;
    dispatch({ type: "ADD_TO_CART", payload: { id: id, amount: amountToAdd } });
    setQuantity(amountToAdd);
  };
  // Book To Show
  const { id } = useParams();
  const book = books.find((book) => book.id === +id!);
  if (!book) {
    return (
      <div className="custom-container flex items-center justify-center text-5xl text-red-500 grow">
        This book is not exist!
      </div>
    );
  }

  // Return JSX
  return (
    <div className="custom-container min-h-screen p-5 text-[#333]">
      <div className="flex md:items-center max-md:flex-col bg-blue-100 p-2 sm:p-5 rounded-lg">
        {/* Book Details Image */}
        <div className="h-[200px] w-[200px] md:h-[400px] md:w-[30%]">
          <img
            src={`${book.image}`}
            alt={book.title}
            className="h-full object-contain"
          />
        </div>
        {/* Book Details Description Wrapper */}
        <div className="py-5 md:pl-10">
          {/* Book Details Description */}
          <div className="w-full flex flex-col gap-2.5 md:gap-5">
            <h1 className="text-2xl sm:text-3xl font-bold shrink-0">
              {book.title}
            </h1>
            <div className="flex items-center gap-2.5">
              <span className="text-xl sm:text-2xl font-bold">By</span>
              <span className="text-primary text-lg shrink-0">
                {book.author}
              </span>
              <b className="text-sm font-medium text-gray-500 shrink-0">
                (Author)
              </b>
            </div>
            <div className="flex items-center gap-2.5">
              <Rating rating={book.rating} />
              <span className="text-yellow-500 font-medium">{book.rating}</span>
              <span className="text-sm text-gray-500 shrink-0">
                ({book.reviews} reviews)
              </span>
            </div>
          </div>
          {/* Book Details Cart */}
          <div className="flex items-center gap-5 my-5">
            <input
              min={1}
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, +e.target.value))}
              className="w-[150px] py-1.5 h-10 bg-white border-2 border-secondary/75 focus:border-primary outline-0 px-1.5 caret-primary rounded-sm placeholder:text-secondary/30 placeholder:text-sm"
            />
            <Button
              variant="secondary"
              size="sm"
              className="shrink-0"
              onClick={() => addToCart(book.id)}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </div>
      {/* Book Details Summary*/}
      <div className="w-full md:w-3/4 text-lg text-justify my-5 font-medium bg-blue-100 p-2 sm:p-5 rounded-lg">
        {book.description}
      </div>
      {/* Book Details public Information */}
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-10 *:flex *:flex-col *:items-center *:gap-2.5">
        <div>
          <span className="font-bold bg-blue-100 px-5 py-1.5 rounded-sm">
            Print Length
          </span>
          <MdOutlineInsertPageBreak className="text-4xl text-primary" />
          <span className="text-secondary">{book.printLength} Pages</span>
        </div>
        <div>
          <span className="font-bold bg-blue-100 px-2.5 py-1.5 rounded-sm">
            Language
          </span>
          <GrLanguage className="text-4xl text-primary" />
          <span className="text-secondary">{book.language}</span>
        </div>
        <div>
          <span className="font-bold bg-blue-100 px-2.5 py-1.5 rounded-sm">
            Publication Date
          </span>
          <HiCalendarDateRange className="text-4xl text-primary" />
          <span className="text-secondary">{book.publicationDate}</span>
        </div>
      </div>
    </div>
  );
};
export default BookDetails;
