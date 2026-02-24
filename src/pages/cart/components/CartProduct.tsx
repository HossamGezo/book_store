// Libraries
import toast from "react-hot-toast";

// React Icons
import { FaPlus, FaMinus } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";

// Custom Hooks
import { useCartContext } from "@/context/CartContext";

// Custom Functions
import { formatCurrency } from "@/utils/formatCurrency";

// Components
import Rating from "@/components/ui/rating/Rating";
import Button from "@/components/ui/buttons/Button";

// Types
import type { BookType } from "@/types/types";
type CartProductProps = {
  amount: number;
} & BookType;

// Main Component
const CartProduct = ({
  id,
  image,
  title,
  author,
  rating,
  price,
  amount,
}: CartProductProps) => {
  // Custom Hooks
  const { dispatch } = useCartContext();
  // Handle Increase Function
  const handleIncrease = (id: number) => {
    dispatch({ type: "INCREASE", payload: { id: id, amount: 1 } });
  };
  // Handle Decrease Function
  const handleDecrease = (id: number) => {
    dispatch({ type: "DECREASE", payload: { id: id, amount: 1 } });
  };
  // Handle Delete Function
  const handleDelete = (id: number) => {
    dispatch({ type: "DELETE_FROM_CART", payload: { id: id } });
    toast.success("Successfully removed from cart!");
  };

  // Return JSX
  return (
    <div
      key={id}
      className="relative bg-white p-5 rounded-lg grid grid-cols-5 place-items-center gap-5"
    >
      {/* Cart Product Image */}
      <div className="place-self-start max-md:col-span-2">
        <img src={`${image}`} alt={title} className="object-contain h-full" />
      </div>
      {/* Cart Product Details */}
      <div className="flex flex-col gap-1 col-span-5 md:col-span-3 place-self-start">
        <span>
          <b className="text-[#333] font-medium bg-blue-100/50 px-1 py-0.5 rounded-sm mr-1">
            Title:
          </b>
          {title}
        </span>
        <span>
          <b className="text-[#333] font-medium w-[65px] bg-blue-100/50 px-1 py-0.5 rounded-sm mr-1">
            Author:
          </b>
          {author}
        </span>
        <span className="flex items-center">
          <b className="text-[#333] font-medium w-[65px] bg-blue-100/50 px-1 py-0.5 rounded-sm mr-1">
            Rating:
          </b>
          <Rating rating={rating} />
        </span>
        <span>
          <b className="text-[#333] font-medium w-[65px] bg-blue-100/50 px-1 py-0.5 rounded-sm mr-1">
            Price:
          </b>
          <span className="text-red-400">{formatCurrency(price)}</span>
        </span>
      </div>
      {/* Cart Product amount */}
      <div className="max-md:col-span-3 max-md:place-self-start">
        {/* Cart Product amount */}
        <div className="flex items-center gap-1 mb-2.5">
          <Button
            size="xs"
            variant="secondary"
            aria-label="Increase quantity"
            onClick={() => handleIncrease(id)}
          >
            <FaPlus className="text-xl" />
          </Button>
          <span className="font-medium text-xl bg-blue-100/50 w-[50px] px-0.5 py-0.5 text-center rounded-sm font-jetbrains">
            {amount}
          </span>
          <Button
            size="xs"
            variant="danger"
            aria-label="Decrease quantity"
            onClick={() => handleDecrease(id)}
          >
            <FaMinus className="text-xl" />
          </Button>
        </div>
      </div>
      {/* Cart Product Delete */}
      <button
        type="button"
        aria-label="Remove product from cart"
        className="absolute bottom-5 right-5 cursor-pointer *:hover:scale-[1.05] *:transition-transform *:duration-300"
        onClick={() => handleDelete(id)}
      >
        <MdDeleteForever className="text-red-500 text-4xl" />
      </button>
    </div>
  );
};

export default CartProduct;
