// React Router
import {Link} from "react-router";
// Custom Hooks
import {useCartContext} from "@/context/CartContext";
// Components
import CartSummary from "./components/CartSummary";
import CartProduct from "./components/CartProduct";
// Main Component
const Cart = () => {
  // Custom Hooks
  const {state} = useCartContext();
  // Return JSX
  return (
    <div className="cart my-10">
      <div className="ccontainer">
        {state.length > 0 ? (
          <>
            <h1 className="cart-title mb-10 text-2xl md:text-3xl font-bold font-jetbrains tracking-tighter text-primary bg-white w-fit py-3 px-10 rounded-lg max-md:mx-auto">
              Your Shopping Cart
            </h1>
            <div className="cart-layout grid grid-cols-5 gap-10">
              {/* Cart Products */}
              <div className="cart-products bg-blue-100 p-5 rounded-lg flex flex-col gap-5 h-[75vh] overflow-y-auto col-span-5 xl:col-span-3">
                {state.map((product) => (
                  <CartProduct key={product.id} {...product} />
                ))}
              </div>
              {/* Cart Summary */}
              <CartSummary />
            </div>
          </>
        ) : (
          <div className="cart-no-products h-[calc(100vh-80px)] flex flex-col items-center justify-center text-[12px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-red-500 font-jetbrains font-bold">
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
