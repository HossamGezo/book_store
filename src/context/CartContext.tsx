/* eslint-disable react-refresh/only-export-components */
// - - - - - - - - - - - - - - - - - - - - - - - - - - - Imports
// Libraries
import { createContext, useContext, useEffect, useReducer } from "react";
import toast from "react-hot-toast";

// Data
import { books } from "@/pages/home/data/books";

// Types
import type { BookType } from "@/types/types";

// - - - - - - - - - - - - - - - - - - - - - - - - - - - Types
// --- Main Components Props
type CartContextProviderProps = {
  children: React.ReactNode;
};
// --- Cart State Props
export type CartStateProps = BookType & {
  amount: number;
};
// --- Cart Action Props
type CartActionProps =
  | {
      type: "ADD_TO_CART" | "INCREASE" | "DECREASE";
      payload: { id: number; amount: number };
    }
  | { type: "DELETE_FROM_CART"; payload: { id: number } };
// --- Cart Context Props
type CartContextProps = {
  dispatch: React.ActionDispatch<[action: CartActionProps]>;
  state: CartStateProps[];
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - Context
const CartContext = createContext<CartContextProps | null>(null);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - Reducer
// --- Initial State
const initialState: CartStateProps[] = JSON.parse(
  window.localStorage.getItem("cart") || "[]",
);

// --- Reducer
const reducer = (
  state: CartStateProps[] = initialState,
  action: CartActionProps,
) => {
  // Handle Delete Function
  function CartDelete(id: number) {
    const result = state.filter((book) => book.id !== id);
    return result;
  }
  // Control Actions
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, amount } = action.payload;
      const isExist = state.find((book) => book.id === id);
      if (isExist) {
        const result = state.map((book) =>
          book.id === id ? { ...book, amount: book.amount + amount } : book,
        );
        return result;
      }
      const book = books.find((book) => book.id === id);
      if (!book) {
        toast.error("Book not found");
        return state;
      }
      // const result = {...book, amount: amount};
      const cart = [...state, { ...book, amount: amount }];
      return cart;
    }
    case "DELETE_FROM_CART": {
      const { id } = action.payload;
      return CartDelete(id);
    }
    case "INCREASE": {
      const { id } = action.payload;
      const result = state.map((book) =>
        book.id === id ? { ...book, amount: book.amount + 1 } : book,
      );
      return result;
    }
    case "DECREASE": {
      const { id } = action.payload;
      const book = state.find((book) => book.id === id);
      if (!book) {
        toast.error("Book not found");
        return state;
      }
      // Delete if amount equal 1
      if (book.amount === 1) {
        toast.success("Successfully removed from cart!");
        return CartDelete(id);
      }
      const result = state.map((book) =>
        book.id === id ? { ...book, amount: book.amount - 1 } : book,
      );
      return result;
    }
    default:
      return state;
  }
};

// - - - - - - - - - - - - - - - - - - - - - - - - - - - Main Component
const CartContextProvider = ({ children }: CartContextProviderProps) => {
  // Cart Reducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // State Trigger
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  // Return JSX
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

// - - - - - - - - - - - - - - - - - - - - - - - - - - - useCartContext Custom Hook
export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context)
    throw Error("useCartContext must be used within a CartContextProvider");
  return context;
};
