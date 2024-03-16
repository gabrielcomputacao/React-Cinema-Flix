import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { totalViewer } from "../utils/calculateTotalViewer";
import { valuetotal } from "../utils/calculateValueTotal";

import { useContextFilms } from "../hooks/useContextFilms";

export const BoxDataFilmDetails = ({ dataSelectedFilm }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));

  const { selectedFilm } = useContextFilms();

  return (
    <Grid
      item
      xs={12}
      padding="1rem"
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"end"}
      flexWrap={matches ? "wrap" : "nowrap"}
      width={"100%"}
      height={"100%"}
      gap={"3rem"}
    >
      <img
        src={selectedFilm.url}
        style={{
          height: "350px",
          borderRadius: "10px",
          marginTop: "0.5rem",
        }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"100%"}
        height={"100%"}
        gap={"4rem"}
      >
        <Typography variant="h4">Todos menos você</Typography>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{ backgroundColor: "#252525", borderRadius: "10px" }}
          padding={"4rem 2rem"}
          gap={"2em"}
        >
          <Typography variant={matchesLg ? "h5" : "h4"}>
            Total de <br /> Espectadores
          </Typography>

          <Typography variant={matchesLg ? "h5" : "h4"}>
            {totalViewer(dataSelectedFilm)}
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        width={"100%"}
        flexDirection={"column"}
        padding={"4rem 2rem"}
        sx={{ backgroundColor: "#252525", borderRadius: "10px" }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"2em"}
        >
          <Typography variant={matchesLg ? "h5" : "h4"}>
            Total de <br /> Receita
          </Typography>
          <Typography variant={matchesLg ? "h5" : "h4"}>
            R$ {valuetotal(dataSelectedFilm)}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};
