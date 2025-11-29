// Custom Hooks
import {useCartContext} from "@/context/CartContext";
// Components
import Button from "@/components/ui/buttons/Button";
// Main Component
const CartSummary = () => {
  // Custom Hooks
  const {state} = useCartContext();
  // Sum Logic
  const total = state.reduce((acc, cur) => {
    return acc + cur.price * cur.amount;
  }, 0);
  // Return JSX
  return (
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
  );
};

export default CartSummary;
