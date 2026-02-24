// Libraries
import { Link } from "react-router";

// Custom Hooks
import { useCartContext } from "@/context/CartContext";

// Components
import CartSummary from "./components/CartSummary";
import CartProduct from "./components/CartProduct";

// Main Component
const Cart = () => {
  // Custom Hooks
  const { state } = useCartContext();

  // Return JSX
  return (
    <div className="my-10 flex flex-col flex-1">
      <div className="custom-container flex flex-col flex-1">
        {state.length > 0 ? (
          <>
            <h1 className="mb-10 text-[23px] md:text-3xl font-bold font-jetbrains tracking-tighter text-primary bg-white w-fit py-3 px-10 rounded-lg max-md:mx-auto">
              Your Shopping Cart
            </h1>
            <div className="grid grid-cols-5 gap-10">
              {/* Cart Products */}
              <div className="custom-scrollbar bg-blue-100 p-5 rounded-lg flex flex-col gap-5 h-[75vh] overflow-y-auto col-span-5 xl:col-span-3">
                {state.map((product) => (
                  <CartProduct key={product.id} {...product} />
                ))}
              </div>
              {/* Cart Summary */}
              <CartSummary />
            </div>
          </>
        ) : (
          <div className="flex flex-col flex-1 items-center justify-center text-[18px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-red-500 font-jetbrains font-bold">
            Your cart is empty. Go back to
            <Link
              to="/"
              className="text-blue-600 underline hover:text-purple-600 font-light"
            >
              home
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default Cart;
