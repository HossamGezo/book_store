// Data
import {books} from "@/pages/home/data/books";
// React Router
import {useNavigate} from "react-router";
// Custom Hook
import {usePopupContext} from "@/context/PopupContext";
// Components
import Rating from "../rating/Rating";
import Button from "../buttons/Button";
type ProductPopupPros = {
  bookId: number | null;
};
// Main Component
const ProductPopup = ({bookId}: ProductPopupPros) => {
  // Custom Context
  const {setTogglePopup} = usePopupContext();
  // Book
  const book = books.filter((book) => book.id === bookId)[0];
  // Handle Navigate Function
  const navigate = useNavigate();
  const handleNavigate = () => {
    setTogglePopup((prev) => {
      return {...prev, isOpen: false}
    });
    navigate(`/book/${bookId}`);
  };
  // Return JSX
  return (
    <div className="product-popup flex max-md:flex-col p-5">
      {/* Product Popup Book Image */}
      <div className="product-popup-book-imag h-[200px] w-[200px] md:h-[400px] md:w-[30%]">
        <img
          src={`images/books/${book.image}`}
          alt={book.title}
          className="h-full object-contain"
        />
      </div>
      {/* Product Popup Book Details */}
      <div className="product-popup-book-details w-[70%] py-5 md:pl-10">
        {/* Product Popup Book Describtion */}
        <div className="product-popup-desc flex flex-col gap-2.5 md:gap-5">
          <h1 className="product-popup-desc-title text-3xl font-bold">
            {book.title}
          </h1>
          <div className="span product-popup-desc-status text-lg">
            <b className="mr-1 text-xl">Status :</b>
            <span>{book.inStock ? "In Stock" : "Out Of Stock"}</span>
          </div>
          <div className="product-popup-desc-rating-reviews flex items-center gap-2.5">
            <Rating rating={book.rating} />
            <span className="product-popup-desc-rating text-yellow-500 font-medium">
              {book.rating}
            </span>
            <span className="product-popup-desc-reviews text-sm text-gray-500 shrink-0">
              ({book.reviews} reviews)
            </span>
          </div>
          <div className="product-popup-desc-author flex">
            <b className="mr-1 text-xl shrink-0">Author :</b>
            <span className="text-primary text-lg shrink-0">{book.author}</span>
          </div>
          <div className="product-popup-desc-price">
            <b className="mr-1 text-xl">Price :</b>
            <span className="text-red-500 text-lg">${book.price}</span>
          </div>
        </div>
        {/* Product Popup Cart */}
        <div className="prodcut-popup-cart flex items-center gap-5 my-5">
          <input
            type="number"
            className="w-[150px] py-1.5 h-10 bg-white border-2 border-secondary/75 focus:border-primary outline-0 px-1.5 caret-primary rounded-sm placeholder:text-secondary/30 placeholder:text-sm"
          />
          <Button variant="secondary" size="sm" className="shrink-0">
            Add To Cart
          </Button>
        </div>
        {/* See More Details Button */}
        <Button onClick={handleNavigate}>See More Details</Button>
      </div>
    </div>
  );
};
export default ProductPopup;
