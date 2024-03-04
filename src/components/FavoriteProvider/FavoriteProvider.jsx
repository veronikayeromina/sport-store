import { createContext, useContext, useState } from "react";

export const FavoriteContext = createContext();

export function useFavorite() {
  const context = useContext(FavoriteContext);

  return context;
}

export function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useState([]);

  const deleteFavorite = (id) => {
    setFavorite((favorite) => favorite.filter((product) => id !== product.id));
  };

  const addFavorite = (product) => {
    if (favorite.some((item) => item.id === product.id)) {
      return;
    }

    setFavorite([...favorite, product]);
  };

  return (
    <FavoriteContext.Provider value={{ deleteFavorite, addFavorite, favorite }}>
      {children}
    </FavoriteContext.Provider>
  );
}
