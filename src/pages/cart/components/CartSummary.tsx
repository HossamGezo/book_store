// Libraries
import { useMemo } from "react";
import { useNavigate } from "react-router";

// Custom Hooks
import { useCartContext } from "@/context/CartContext";

// Custom Functions
import { formatCurrency } from "@/utils/formatCurrency";

// Components
import Button from "@/components/ui/buttons/Button";

// Main Component
const CartSummary = () => {
  // Custom Hooks
  const { state } = useCartContext();

  // Sum Logic
  const total = useMemo(() => {
    return state.reduce((acc, cur) => acc + cur.price * cur.amount, 0);
  }, [state]);

  // Navigate
  const navigate = useNavigate();

  // Return JSX
  return (
    <div className="bg-blue-100 p-5 rounded-lg h-fit col-span-5 xl:col-span-2">
      <h2 className="bg-white rounded-lg p-2.5 mb-5 text-center text-2xl font-bold font-jetbrains text-primary">
        Order Summary
      </h2>
      <div className="bg-white rounded-lg p-2.5 mb-5 *:flex *:items-center *:justify-between *:not-last:border-b *:border-b-blue-200 *:py-2.5">
        <div>
          <span className="font-medium">Subtotal</span>
          <span>{formatCurrency(total)}</span>
        </div>
        <div>
          <span className="font-medium">Shipping Cost</span>
          <span className="text-green-700">Free</span>
        </div>
        <div>
          <span className="font-medium">Discount</span>
          <span className="text-green-700">5%</span>
        </div>
        <div>
          <span className="font-medium">Total</span>
          <span>{formatCurrency(total - total * 0.05)}</span>
        </div>
      </div>
      <Button
        size="sm"
        onClick={() => {
          console.log("redirect");
          navigate("/login");
        }}
      >
        Pay Now
      </Button>
    </div>
  );
};

export default CartSummary;
