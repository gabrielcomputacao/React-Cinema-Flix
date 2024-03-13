import { Box, Grid } from "@mui/material";
import { CardFilm } from "./CardFilm";

export const ListCardFilms = ({ listFilms }) => {
  return (
    <Grid container spacing={2} rowGap={2}>
      <Grid item xs={12}>
        <Box
          display="flex"
          sx={{
            columnGap: "1.5em",
            padding: "1rem",
            overflowX: "auto",
            whiteSpace: "nowrap",
            "&::-webkit-scrollbar": {
              height: "12px",
              backgroundColor: "#252525",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "primary.main",
              borderRadius: "6px",
            },
          }}
        >
          {listFilms.map((film) => (
            <CardFilm key={film.id} film={film} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};
