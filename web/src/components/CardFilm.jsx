import { Paper, Typography } from "@mui/material";

import { Link } from "react-router-dom";
import { useFilms } from "../hooks/useFilms";

export const CardFilm = ({ film, index }) => {
  const { setSelectedFilm } = useFilms();

  return (
    <Link
      key={film.id}
      to={`/${index}`}
      underline="none"
      onClick={() => setSelectedFilm(film)}
      data-testid="film-display"
    >
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
    </Link>
  );
};
