import { createContext, useEffect, useState } from "react";

interface FavoritesContextType {
  favorites: string[];
  toggleFavorite: (team: string) => void;
  isFavorite: (team: string) => boolean;
}

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  // Cargar desde localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(stored);
  }, []);

  // Guardar en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (team: string) => {
    setFavorites((prev) => {
      if (prev.includes(team)) {
        return prev.filter((t) => t !== team);
      } else {
        return [...prev, team];
      }
    });
  };

  const isFavorite = (team: string) => {
    return favorites.includes(team);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};