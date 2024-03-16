import { Grid, Paper, Typography } from "@mui/material";

import { Link, useLocation } from "react-router-dom";
import { useContextFilms } from "../hooks/useContextFilms";
import { useMemo } from "react";

export const CardFilm = ({ film, index }) => {
  const { setSelectedFilm, setFilms } = useContextFilms();

  const { pathname } = useLocation();

  const verificationPath = useMemo(() => {
    return pathname !== "/details";
  }, [pathname]);

  console.log(pathname);

  const handleCardFilmDetails = () => {
    setSelectedFilm(film);
    setFilms((prev) => prev.filter((cardFilm) => cardFilm.id !== film.id));
  };

  const Wrapper = ({ children }) => {
    return verificationPath ? (
      <Link
        key={film.id}
        to={`/${index}`}
        underline="none"
        onClick={() => setSelectedFilm(film)}
        data-testid="film-display"
      >
        {children}
      </Link>
    ) : (
      <Grid
        key={film.id}
        data-testid="film-display"
        onClick={() => handleCardFilmDetails()}
      >
        {children}
      </Grid>
    );
  };

  return (
    <Wrapper>
      <Paper
        elevation={4}
        sx={{
          padding: "0.5rem",
          borderRadius: "0.5rem",
          "&:hover": {
            border: "1px solid",
            borderColor: "primary.dark",
          },
        }}
      >
        <Typography variant="subtitle1">{film.name}</Typography>
        <img
          src={film.url}
          style={{
            height: "350px",
            borderRadius: "10px",
            marginTop: "0.5rem",
          }}
        />
      </Paper>
    </Wrapper>
  );
};
