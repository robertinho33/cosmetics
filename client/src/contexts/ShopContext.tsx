import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/catalog";

type CartLine = { product: Product; quantity: number };
type ShopContextValue = {
  cart: CartLine[];
  cartCount: number;
  subtotal: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const ShopContext = createContext<ShopContextValue | null>(null);

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartLine[]>(() => {
    try {
      const stored = localStorage.getItem("vela-cart");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("vela-cart", JSON.stringify(cart));
  }, [cart]);

  const value = useMemo<ShopContextValue>(() => ({
    cart,
    cartCount: cart.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0),
    addToCart: (product) => setCart((current) => {
      const found = current.find((line) => line.product.id === product.id);
      if (found) return current.map((line) => line.product.id === product.id ? { ...line, quantity: line.quantity + 1 } : line);
      return [...current, { product, quantity: 1 }];
    }),
    removeFromCart: (productId) => setCart((current) => current.filter((line) => line.product.id !== productId)),
    updateQuantity: (productId, quantity) => setCart((current) => quantity <= 0 ? current.filter((line) => line.product.id !== productId) : current.map((line) => line.product.id === productId ? { ...line, quantity } : line)),
    clearCart: () => setCart([]),
  }), [cart]);

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const context = useContext(ShopContext);
  if (!context) throw new Error("useShop must be used inside ShopProvider");
  return context;
}
