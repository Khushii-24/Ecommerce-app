import { createContext, useContext, useEffect, useReducer } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext(null);

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return { items: action.payload || [] };
    case "TOGGLE": {
      const exists = state.items.find((p) => p.id === action.product.id);
      if (exists) {
        return {
          items: state.items.filter((p) => p.id !== action.product.id),
        };
      }
      return { items: [...state.items, action.product] };
    }
    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = useAuth();

  // key per user so wishlist persists “after login”
  const storageKey = user ? `wishlist_${user.email}` : "wishlist_guest";

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        dispatch({ type: "INIT", payload: JSON.parse(stored) });
      } catch {
        dispatch({ type: "INIT", payload: [] });
      }
    } else {
      dispatch({ type: "INIT", payload: [] });
    }
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state.items));
  }, [state.items, storageKey]);

  const toggleWishlist = (product) =>
    dispatch({ type: "TOGGLE", product });

  const isInWishlist = (id) =>
    state.items.some((p) => p.id === id);

  const value = {
    items: state.items,
    toggleWishlist,
    isInWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export const useWishlist = () => useContext(WishlistContext);
