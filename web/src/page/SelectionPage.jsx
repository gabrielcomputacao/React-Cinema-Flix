import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { ListCardFilms } from "../components/ListCardFilms";

export function SelectionPage() {
  const [films, setFilms] = useState([]);

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
