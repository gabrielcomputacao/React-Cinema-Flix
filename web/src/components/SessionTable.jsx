import {
  Box,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import { useContextFilms } from "../hooks/useContextFilms";
import { useContext } from "react";
import { FilmsContext } from "../context/FilmsContext";

export const SessionTable = ({ dataSelectedFilm }) => {
  const theme = useTheme();

  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));

  const { selectedFilm } = useContext(FilmsContext);

  return (
    <>
      {selectedFilm.sessions.map((sessionValue, index) => {
        const arrayValueEspec = Array.from(selectedFilm.sessions.length);
        const arrayValueAmount = Array.from(selectedFilm.sessions.length);
        let addValue = 0;
        let addAmount = 0;

        return (
          <Container
            key={index}
            maxWidth={"100%"}
            sx={{ padding: "1rem 0" }}
            data-testid="container-table"
          >
            <Box>
              <Typography variant="h4" marginBottom={"2rem"}>
                Sessão {sessionValue.session}
              </Typography>
              <Box
                padding={"2rem"}
                sx={{
                  backgroundColor: "#252525",
                  borderRadius: "10px",
                }}
              >
                <TableContainer component={Box}>
                  <Table
                    sx={{
                      minWidth: 650,
                    }}
                    aria-label="simple table"
                  >
                    <TableHead sx={{ borderRadius: "10px" }}>
                      <TableRow>
                        <TableCell sx={{ width: "45%" }}>Nome</TableCell>
                        <TableCell sx={{ width: "45%" }}>Assento</TableCell>
                        <TableCell>Valor</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody
                      sx={{
                        "& .MuiTableRow-root:nth-of-type(odd)": {
                          backgroundColor: "#131313",
                        },
                        "& .MuiTableRow-root:nth-of-type(even)": {
                          backgroundColor: "#252525",
                        },
                      }}
                    >
                      {dataSelectedFilm &&
                        dataSelectedFilm.map((row) => {
                          if (row.session === sessionValue.session) {
                            addValue += row.seats.length;
                            addAmount += row.seats.length * row.value;
                            arrayValueEspec[index] = addValue;
                            arrayValueAmount[index] = addAmount;
                            return (
                              <TableRow
                                key={row.name}
                                sx={{
                                  border: 0,
                                  borderRadius: "10px",
                                }}
                              >
                                <TableCell align="left">{row.name}</TableCell>

                                <TableCell align="left">
                                  {row.seats.map((item) => (
                                    <span key={item}>{`${item} `}</span>
                                  ))}
                                </TableCell>
                                <TableCell align="left">{row.value}</TableCell>
                              </TableRow>
                            );
                          }
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  width={"100%"}
                  alignItems={"center"}
                  marginTop={"2rem"}
                >
                  <Typography
                    variant={matchesLg ? "h5" : "h4"}
                    marginBottom={"2rem"}
                  >
                    Total de Espectadores: {arrayValueEspec[index]}
                  </Typography>
                  <Typography
                    variant={matchesLg ? "h5" : "h4"}
                    marginBottom={"2rem"}
                  >
                    Total de Receita: {arrayValueAmount[index]}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        );
      })}
    </>
  );
};
