// Libraries
import toast from "react-hot-toast";

// React Icons
import { FaEye } from "react-icons/fa";
import { MdShoppingCart } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

// Custom Hooks
import { usePopupContext } from "@/context/PopupContext";
import { useCartContext } from "@/context/CartContext";

// Custom Functions
import { formatCurrency } from "@/utils/formatCurrency";

// Types
import { type BookType } from "@/types/types";

// Components
import Rating from "../rating/Rating";

// Main Component
const Card = ({ id, price, rating, title, reviews, image }: BookType) => {
  // Custom Hooks
  const { setTogglePopup } = usePopupContext();
  const { state, dispatch } = useCartContext();
  // Is In Cart
  const isInCart = state.find((product) => product.id === id);
  // Add To Cart Function
  const addToCart = (id: number) => {
    dispatch({ type: "ADD_TO_CART", payload: { id: id, amount: 1 } });
    toast.success("Successfully added to cart!");
  };
  // Remove From Cart Function
  const removeFromCart = (id: number) => {
    dispatch({ type: "DELETE_FROM_CART", payload: { id: id } });
    toast.success("Successfully removed from cart!");
  };

  // Return JSX
  return (
    <div className="relative group h-[500px] w-[330px] lg:w-[311px] py-1.5 rounded-lg bg-white shadow-normal border-t-2 border-t-transparent hover:scale-[1.01] hover:-translate-y-1.5 hover:shadow-scale hover:border-t-2 hover:border-t-primary/65 transition-all duration-500">
      <div className="h-[60%] p-1 flex items-center justify-center">
        <img
          draggable={false}
          src={`${image}`}
          alt={title}
          className="h-full object-contain"
        />
      </div>
      <div className="p-1.5">
        <h3 className="text-lg font-medium h-14">
          {title}_{id}
        </h3>
        <div className="my-2.5">
          <div className="flex items-center gap-2.5">
            <Rating rating={rating} />
            <span className="text-yellow-500 text-lg">{rating}</span>
            <span className="text-sm text-gray-500">({reviews} reviews)</span>
          </div>
          <div className="text-center mt-1.5 text-xl text-red-700 font-bold">
            {formatCurrency(price)}
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex items-center justify-center gap-5 text-xl pt-3 border-t-2 border-t-primary/45 group-hover:border-t-primary/65">
          <button
            type="button"
            aria-label="View book details"
            onClick={() => setTogglePopup({ isOpen: true, bookId: id })}
          >
            <FaEye className="text-primary/65 hover:text-primary cursor-pointer" />
          </button>
          {!isInCart ? (
            <button
              type="button"
              aria-label="Add to cart"
              onClick={() => addToCart(id)}
            >
              <MdOutlineShoppingCart className="text-green-600/65 hover:text-green-600 cursor-pointer" />
            </button>
          ) : (
            <button
              type="button"
              aria-label="Remove from cart"
              onClick={() => removeFromCart(id)}
            >
              <MdShoppingCart className="text-green-600/65 hover:text-green-600 cursor-pointer" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
