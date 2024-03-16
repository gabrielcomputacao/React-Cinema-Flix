import axios from "axios";
import { useEffect, useState } from "react";

export const useFilmsAPI = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/films")
      .then((response) => setFilms(response.data));
  }, []);

  return { films, setFilms };
};
