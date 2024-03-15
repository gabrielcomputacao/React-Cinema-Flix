import axios from "axios";
import { useEffect, useState } from "react";

export const useFilmsAPI = () => {
  const [filmsApi, setFilmsApi] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/films")
      .then((response) => setFilmsApi(response.data));
  }, []);

  return filmsApi;
};
