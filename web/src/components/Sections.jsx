import { Chip, Paper, Typography } from "@mui/material";
import { useFilms } from "../hooks/useFilms";

export const Sections = () => {
  const { selectedFilm, selectedSession, setSelectedSession } = useFilms();

  return (
    <Paper
      sx={{
        gridRow: "1",
        padding: "1rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Typography variant="h6">Qual sessão?</Typography>
      {selectedFilm.sessions.map((s) => (
        <Chip
          key={s.session}
          label={s.session}
          data-testid="sessions-film"
          variant={
            s.session === selectedSession?.session ? "filled" : "outlined"
          }
          onClick={() => setSelectedSession(s)}
        />
      ))}
    </Paper>
  );
};
