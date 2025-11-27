// Custom Hooks
import {useCartContext} from "@/context/CartContext";
// React Icons
import {FaPlus, FaMinus} from "react-icons/fa6";
import {MdDeleteForever} from "react-icons/md";
// Components
import Button from "@/components/ui/buttons/Button";
import Rating from "@/components/ui/rating/Rating";
// Main Component
const Cart = () => {
  // Custom Hooks
  const {state, dispatch} = useCartContext();
  // Handle Increase Function
  const handleIncrease = (id: number) => {
    dispatch({type: "INCREASE", payload: {id: id, amount: 1}});
  };
  // Handle Decrease Function
  const handleDecrease = (id: number) => {
    dispatch({type: "DECREASE", payload: {id: id, amount: 1}});
  };
  // Handle Delete Function
  const handleDelete = (id: number) => {
    dispatch({type: "DELETE_FROM_CART", payload: {id: id, amount: 1}});
  };
  // Sum Logic
  const result = state.map((product) => product.price * product.amount);
  const total = result.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  // Return JSX
  return (
    <div className="cart my-10">
      <div className="ccontainer">
        <h1 className="cart-title mb-10 text-2xl md:text-3xl font-bold font-jetbrains tracking-tighter text-primary bg-white w-fit py-3 px-10 rounded-lg max-md:mx-auto">
          Your Shopping Cart
        </h1>
        <div className="cart-layout grid grid-cols-5 gap-10">
          {/* Cart Products */}
          <div className="cart-products bg-blue-100 p-5 rounded-lg flex flex-col gap-5 h-[75vh] overflow-y-auto col-span-5 xl:col-span-3">
            {state.map((product) => (
              <div
                key={product.id}
                className="cart-product-wrapper relative bg-white p-5 rounded-lg grid grid-cols-5 place-items-center gap-5"
              >
                {/* Cart Product Image */}
                <div className="cart-product-image place-self-start max-md:col-span-2">
                  <img
                    src={`images/books/${product.image}`}
                    alt={product.title}
                    className="object-contain h-full"
                  />
                </div>
                {/* Cart Prodct Details */}
                <div className="cart-product-details flex flex-col gap-1 col-span-5 md:col-span-3 place-self-start">
                  <span className="cart-product-details-title">
                    <b className="text-[#333] font-medium bg-blue-100/50 px-1 py-0.5 rounded-sm mr-1">
                      Title:
                    </b>
                    {product.title}
                  </span>
                  <span className="cart-product-details-author">
                    <b className="text-[#333] font-medium w-[65px] bg-blue-100/50 px-1 py-0.5 rounded-sm mr-1">
                      Author:
                    </b>
                    {product.author}
                  </span>
                  <span className="cart-product-details-rating flex items-center">
                    <b className="text-[#333] font-medium w-[65px] bg-blue-100/50 px-1 py-0.5 rounded-sm mr-1">
                      Rating:
                    </b>
                    <Rating rating={product.rating} />
                  </span>
                  <span className="cart-product-details-price">
                    <b className="text-[#333] font-medium w-[65px] bg-blue-100/50 px-1 py-0.5 rounded-sm mr-1">
                      Price:
                    </b>
                    <span className="text-red-400">${product.price}</span>
                  </span>
                </div>
                {/* Cart Prodct amount */}
                <div className="cart-product-amount max-md:col-span-3 max-md:place-self-start">
                  {/* Cart Product amount */}
                  <div className="cart-product-amount flex items-center gap-1 mb-2.5">
                    <Button
                      size="xs"
                      variant="secondary"
                      onClick={() => handleIncrease(product.id)}
                    >
                      <FaPlus className="text-xl" />
                    </Button>
                    <span className="cart-prodcut-amount-digit font-medium text-xl bg-blue-100/50 w-[50px] px-0.5 py-0.5 text-center rounded-sm font-jetbrains">
                      {product.amount}
                    </span>
                    <Button
                      size="xs"
                      variant="danger"
                      onClick={() => handleDecrease(product.id)}
                    >
                      <FaMinus className="text-xl" />
                    </Button>
                  </div>
                </div>
                {/* Cart Product Delete */}
                <div
                  className="cart-product-delete absolute bottom-5 right-5 cursor-pointer *:hover:scale-[1.05] *:transition-transform *:duration-300"
                  onClick={() => handleDelete(product.id)}
                >
                  <MdDeleteForever className="text-red-500 text-4xl" />
                </div>
              </div>
            ))}
          </div>
          {/* Cart Summary */}
          <div className="cart-summary bg-blue-100 p-5 rounded-lg h-fit col-span-5 xl:col-span-2">
            <h2 className="cart-summary-title bg-white rounded-lg p-2.5 mb-5 text-center text-2xl font-bold font-jetbrains text-primary">
              Order Summary
            </h2>
            <div className="order-summary-details bg-white rounded-lg p-2.5 mb-5 *:flex *items-center *:justify-between *:not-last:border-b *:border-b-blue-200 *:py-2.5">
              <div className="cart-summary-subtotal">
                <span className="font-medium">Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="cart-summary-shipping-cost">
                <span className="font-medium">Shipping Cost</span>
                <span className="text-green-700">Free</span>
              </div>
              <div className="cart-summary-discount">
                <span className="font-medium">Discount</span>
                <span className="text-green-700">5%</span>
              </div>
              <div className="cart-summary-total">
                <span className="font-medium">Total</span>
                <span>${(total - total * 0.05).toFixed(2)}</span>
              </div>
            </div>
            <Button size="sm">Pay Now</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
