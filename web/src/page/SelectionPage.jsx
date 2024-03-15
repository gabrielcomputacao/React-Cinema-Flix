import { Container, Typography } from "@mui/material";

import { Header } from "../components/Header";
import { ListCardFilms } from "../components/ListCardFilms";

import { useContextFilms } from "../hooks/useContextFilms";

export function SelectionPage() {
  const { films } = useContextFilms();

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
