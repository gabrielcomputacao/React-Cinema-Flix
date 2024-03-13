import { useContext } from "react";
import { SelectedFilmContext } from "../context/SelectedFilmContext";

export const useSelectedFilm = () => useContext(SelectedFilmContext);
