// Libraries
import { useState } from "react";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

// Data
import { books } from "@/pages/home/data/books";

// Custom Hooks
import { usePopupContext } from "@/context/PopupContext";
import { useCartContext } from "@/context/CartContext";

// Custom Functions
import { formatCurrency } from "@/utils/formatCurrency";

// Components
import Rating from "../rating/Rating";
import Button from "../buttons/Button";
type ProductPopupProps = {
  bookId: number | null;
};

// Main Component
const ProductPopup = ({ bookId }: ProductPopupProps) => {
  // React Hooks
  const [quantity, setQuantity] = useState<number>(1);
  // Custom Hooks
  const { setTogglePopup } = usePopupContext();
  const { dispatch } = useCartContext();
  // Book
  const book = books.find((b) => b.id === bookId);
  if (!book) throw Error("Book Isn't Exist");
  // Handle Navigate Function
  const navigate = useNavigate();
  const handleNavigate = () => {
    setTogglePopup((prev) => {
      return { ...prev, isOpen: false };
    });
    navigate(`/book/${bookId}`);
  };
  // addToCart Function
  const addToCart = (id: number) => {
    const amountToAdd = quantity < 1 ? 1 : quantity;
    dispatch({ type: "ADD_TO_CART", payload: { id: id, amount: amountToAdd } });
    setQuantity(amountToAdd);
    toast.success("Successfully added to cart!");
  };
  // Return JSX
  return (
    <div className="flex max-md:flex-col p-5">
      {/* Product Popup Book Image */}
      <div className="h-[200px] w-[200px] md:h-[400px] md:w-[30%]">
        <img
          src={`${book.image}`}
          alt={book.title}
          className="h-full object-contain"
        />
      </div>
      {/* Product Popup Book Details */}
      <div className="w-[70%] py-5 md:pl-10">
        {/* Product Popup Book Describtion */}
        <div className="flex flex-col gap-2.5 md:gap-5">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <div className="span text-lg">
            <b className="mr-1 text-xl">Status :</b>
            <span>{book.inStock ? "In Stock" : "Out Of Stock"}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Rating rating={book.rating} />
            <span className="text-yellow-500 font-medium">{book.rating}</span>
            <span className="text-sm text-gray-500 shrink-0">
              ({book.reviews} reviews)
            </span>
          </div>
          <div className="flex">
            <b className="mr-1 text-xl shrink-0">Author :</b>
            <span className="text-primary text-lg shrink-0">{book.author}</span>
          </div>
          <div>
            <b className="mr-1 text-xl">Price :</b>
            <span className="text-red-500 text-lg">
              {formatCurrency(book.price)}
            </span>
          </div>
        </div>
        {/* Product Popup Cart */}
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
        {/* See More Details Button */}
        <Button onClick={handleNavigate}>See More Details</Button>
      </div>
    </div>
  );
};
export default ProductPopup;
