import { Container, Typography } from "@mui/material";

import { Header } from "../components/Header";
import { ListCardFilms } from "../components/ListCardFilms";

import { useContextFilms } from "../hooks/useContextFilms";
import { useEffect } from "react";
import axios from "axios";

export function SelectionPage() {
  const { films, setFilms } = useContextFilms();

  useEffect(() => {
    axios
      .get("http://localhost:3000/films")
      .then((response) => setFilms(response.data));
  }, []);

  return (
    <div>
      <Header />

      <Container maxWidth="100vw">
        <Typography variant="h2" sx={{ margin: "4rem 0" }}>
          Qual filme deseja assistir?
        </Typography>
        <ListCardFilms listFilms={films} />
      </Container>
    </div>
  );
}
