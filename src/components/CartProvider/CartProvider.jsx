import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);

  return context;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const deleteProduct = (id) => {
    setCart((cart) => cart.filter((product) => id !== product.id));
  };

  const addProduct = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      return;
    }

    setCart([...cart, { ...product, count: 1 }]);
  };

  const increase = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: ++product.count * product.price,
          };
        }
        return product;
      });
    });
  };

  const decrease = (id) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;

          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        }
        return product;
      });
    });
  };

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        }
        return product;
      });
    });
  };

  console.log(cart);
  return (
    <CartContext.Provider
      value={{
        changeValue,
        decrease,
        increase,
        deleteProduct,
        cart,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
