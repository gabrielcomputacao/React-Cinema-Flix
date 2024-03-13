import { Link, Paper, Typography } from "@mui/material";
import { useSelectedFilm } from "../hooks/useSelectedFilm";

export const CardFilm = ({ film }) => {
  const { setSelectedFilm } = useSelectedFilm();

  return (
    <Link
      key={film.id}
      href="#"
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
