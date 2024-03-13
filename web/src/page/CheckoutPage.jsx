import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Seats } from "../components/Seats";
import { useSelectedFilm } from "../hooks/useSelectedFilm";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function CheckoutPage({ showAlert }) {
  const [selectedSession, setSelectedSession] = useState();
  const [bookingName, setBookingName] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingSeats, setBookingSeats] = useState([]);

  const { selectedFilm, setSelectedFilm } = useSelectedFilm();

  useEffect(() => {
    if (selectedSession) {
      axios
        .get(
          `http://localhost:3000/bookings?filmId=${selectedFilm.id}&session=${selectedSession.session}`
        )
        .then((response) => {
          setBookingSeats(response.data.flatMap((obj) => obj.seats));
        });

      setSelectedSeats([]);
    }
  }, [selectedSession]);

  function toogleSeatClick(seat) {
    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((i) => i !== seat) : [...prev, seat]
    );
  }

  async function handleBookingSubmit(e) {
    e.preventDefault();

    if (!bookingName) {
      showAlert("Informar o nome da reserva", "error");
      return;
    }

    const payload = {
      filmId: selectedFilm.id,
      session: selectedSession.session,
      name: bookingName,
      seats: selectedSeats,
      value: selectedSession.value * selectedSeats.length,
    };
    await axios.post("http://localhost:3000/bookings", payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    showAlert("Reserva efetuada com sucesso!", "success");
    setSelectedFilm();
  }

  return (
    <div>
      <Container maxWidth="100vw">
        <Typography variant="h2" sx={{ margin: "4rem 0" }}>
          Quando e onde assistir?
        </Typography>
        <Grid container spacing={2} rowGap={2}>
          <Grid
            item
            xs={12}
            display="grid"
            gridTemplateColumns="3fr 1fr"
            gridTemplateRows="repeat(1fr, auto)"
            gap={1}
          >
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
                  variant={
                    s.session === selectedSession?.session
                      ? "filled"
                      : "outlined"
                  }
                  onClick={() => setSelectedSession(s)}
                />
              ))}
            </Paper>
            {selectedSession && (
              <Paper sx={{ gridRow: "2 / 4", padding: "1rem" }}>
                <Typography variant="h6">
                  Selecione seu(s) assento(s)
                </Typography>
                <Typography
                  variant="h6"
                  margin=" 1rem 0"
                  sx={{
                    textAlign: "center",
                    border: "1px solid",
                    borderColor: "primary.default",
                  }}
                >
                  Tela
                </Typography>
                <Seats
                  lockSeats={bookingSeats}
                  selectedSeats={selectedSeats}
                  toogleSeatClick={toogleSeatClick}
                />
              </Paper>
            )}
            <Paper sx={{ gridColumn: "2", gridRow: "span 3", padding: "1rem" }}>
              <Grid display={"flex"} flexDirection={"column"} gap={3}>
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

                {Boolean(selectedSeats.length) && (
                  <>
                    <Box>
                      <Typography variant="subtitle2">Carrinho</Typography>
                      <List
                        sx={{
                          width: "100%",
                          padding: "1rem",
                          bgcolor: "background.paper",
                        }}
                      >
                        {selectedSeats.map((seat) => (
                          <ListItem
                            key={seat}
                            disableGutters
                            secondaryAction={
                              <IconButton onClick={() => toogleSeatClick(seat)}>
                                <DeleteOutlineIcon />
                              </IconButton>
                            }
                          >
                            <ListItemText
                              primary={`Assento ${seat} (${formatter.format(
                                selectedSession?.value
                              )})`}
                            />
                          </ListItem>
                        ))}
                      </List>
                      <Typography>
                        Total:{" "}
                        {formatter.format(
                          (selectedSeats.length * selectedSession?.value) | 0
                        )}
                      </Typography>
                    </Box>
                    <form onSubmit={handleBookingSubmit}>
                      <Box display="flex" flexDirection="column" gap={2}>
                        <TextField
                          name="name"
                          label="Nome"
                          placeholder="Responsável pela reserva"
                          value={bookingName}
                          onChange={({ target }) =>
                            setBookingName(target.value)
                          }
                        />
                        <Button type="submit" variant="contained">
                          Confirmar
                        </Button>
                      </Box>
                    </form>
                  </>
                )}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
