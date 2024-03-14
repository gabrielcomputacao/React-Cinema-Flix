import { Box, Typography } from "@mui/material";
import { useFilms } from "../hooks/useFilms";

export const DescriptionFilm = () => {
  const { selectedFilm } = useFilms();

  return (
    <Box display={"flex"} flexDirection={"column"} rowGap={1}>
      <img
        src={selectedFilm.url}
        style={{
          height: "400px",
          borderRadius: "10px",
          margin: "0 auto",
        }}
      />
      <Typography variant="h5">{selectedFilm.name}</Typography>
      <Typography variant="body1" sx={{ textAlign: "justify" }}>
        <strong>Sinopse:</strong> {selectedFilm.sinopse}
      </Typography>
    </Box>
  );
};
