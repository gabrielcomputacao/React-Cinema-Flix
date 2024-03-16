import { Container, Grid, Typography } from "@mui/material";

import { useContextFilms } from "../hooks/useContextFilms";
import { ListCardFilms } from "../components/ListCardFilms";
import { useEffect, useState } from "react";
import axios from "axios";

import { BoxDataFilmDetails } from "../components/BoxDataFilmDetails";
import { SessionTable } from "../components/SessionTable.jsx";

export const DetailsFilm = () => {
  const { films, selectedFilm, setSelectedFilm, setFilms } = useContextFilms();
  const [dataSelectedFilm, setDataSelectedFilm] = useState();

  useEffect(() => {
    if (selectedFilm) {
      axios
        .get(`http://localhost:3000/bookings?filmId=${selectedFilm.id}`)
        .then((response) => setDataSelectedFilm(response.data));
    }
  }, [selectedFilm]);

  useEffect(() => {
    setSelectedFilm();

    axios
      .get("http://localhost:3000/films")
      .then((response) => setFilms(response.data));
  }, [setSelectedFilm]);

  return (
    <div>
      <Container maxWidth="100vw">
        <Typography variant="h4" sx={{ margin: "1rem 0", fontWeight: "bold" }}>
          Gestão Fácil Flix
        </Typography>
        <ListCardFilms listFilms={films} />
        <Grid>
          {selectedFilm ? (
            <Grid
              display={"flex"}
              justifyContent={"center"}
              flexDirection={"column"}
              alignItems={"center"}
              width={"100%"}
              height={"100%"}
              gap={"3rem"}
            >
              <BoxDataFilmDetails dataSelectedFilm={dataSelectedFilm} />

              <SessionTable dataSelectedFilm={dataSelectedFilm} />
            </Grid>
          ) : (
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
              <Typography variant="h6">
                Para visualizar mais detalhes
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
};
