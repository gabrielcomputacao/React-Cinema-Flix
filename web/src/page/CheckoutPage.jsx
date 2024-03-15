import { Container, Grid, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { BoxConfirm } from "../components/BoxConfirm";
import { Cart } from "../components/Cart";
import { Sections } from "../components/Sections";
import { SelectSeat } from "../components/SelectSeat";
import { DescriptionFilm } from "../components/DescriptionFilm";
import { useContextFilms } from "../hooks/useContextFilms";

export function CheckoutPage() {
  const { selectedFilm, onSetShowAlert, selectedSession, selectedSeats } =
    useContextFilms();

  const [bookingName, setBookingName] = useState("");

  const navigate = useNavigate();

  async function handleBookingSubmit(e) {
    e.preventDefault();

    if (!bookingName) {
      onSetShowAlert("Informar o nome da reserva", "error");
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

    onSetShowAlert("Reserva efetuada com sucesso!", "success");
    navigate("/");
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
            <Sections />
            {selectedSession && <SelectSeat />}

            <Paper sx={{ gridColumn: "2", gridRow: "span 3", padding: "1rem" }}>
              <Grid display={"flex"} flexDirection={"column"} gap={3}>
                <DescriptionFilm />

                {Boolean(selectedSeats.length) && (
                  <>
                    <Cart />
                    <form onSubmit={handleBookingSubmit}>
                      <BoxConfirm
                        bookingName={bookingName}
                        setBookingName={setBookingName}
                      />
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
