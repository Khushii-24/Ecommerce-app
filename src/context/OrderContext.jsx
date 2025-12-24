// src/context/OrderContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const OrderContext = createContext(null);

export function OrderProvider({ children }) {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  const storageKey = user ? `orders_${user.email}` : null;

  useEffect(() => {
    if (!storageKey) {
      setOrders([]);
      return;
    }
    const stored = localStorage.getItem(storageKey);
    if (stored) {
      try {
        setOrders(JSON.parse(stored));
      } catch {
        setOrders([]);
      }
    }
  }, [storageKey]);

  const addOrder = (order) => {
    if (!storageKey) return;
    const next = [order, ...orders];
    setOrders(next);
    localStorage.setItem(storageKey, JSON.stringify(next));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

export const useOrders = () => useContext(OrderContext);
