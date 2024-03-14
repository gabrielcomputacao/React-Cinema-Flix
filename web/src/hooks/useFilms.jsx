import { useContext } from "react";
import { FilmsContext } from "../context/FilmsContext";

export const useFilms = () => useContext(FilmsContext);
