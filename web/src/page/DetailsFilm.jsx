import { Container, Grid, Typography } from "@mui/material";

import { useContextFilms } from "../hooks/useContextFilms";
import { ListCardFilms } from "../components/ListCardFilms";

export const DetailsFilm = () => {
  const { films } = useContextFilms();

  return (
    <div>
      <Container maxWidth="100vw">
        <Typography variant="h4" sx={{ margin: "1rem 0", fontWeight: "bold" }}>
          Gestão Fácil Flix
        </Typography>
        <ListCardFilms listFilms={films} />
        <Grid
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
          width={"100%"}
          marginTop={"20px"}
        >
          <Typography
            variant="h3"
            sx={{ margin: "1rem 0 .3rem 0", fontWeight: "bold" }}
          >
            SELECIONE UM FILME
          </Typography>
          <Typography variant="h6">Para visualizar mais detalhes</Typography>
        </Grid>
      </Container>
    </div>
  );
};
