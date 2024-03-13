import { createContext, useState } from "react";

export const SelectedFilmContext = createContext();

export const SelectedFilmProvider = ({ children }) => {
  const [selectedFilm, setSelectedFilm] = useState();

  return (
    <SelectedFilmContext.Provider value={{ selectedFilm, setSelectedFilm }}>
      {children}
    </SelectedFilmContext.Provider>
  );
};
