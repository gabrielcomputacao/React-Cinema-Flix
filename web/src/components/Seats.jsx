import ChairIcon from "@mui/icons-material/Chair";
import { Grid, IconButton } from "@mui/material";
import { useFilms } from "../hooks/useFilms";

import toogleSeatClick from "../utils/toogleSeatClick";
import { useEffect, useState } from "react";
import axios from "axios";

const CINEMA_ROOM_SIZE = Object.freeze({
  rows: 10,
  columns: 15,
});

export const Seats = () => {
  const { selectedSeats, setSelectedSeats, selectedSession, selectedFilm } =
    useFilms();
  const [bookingSeats, setBookingSeats] = useState([]);

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
  }, [selectedSession, selectedFilm, setSelectedSeats]);

  return (
    <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
      {Array.from({ length: CINEMA_ROOM_SIZE.rows + 1 }).map((_, r) => (
        <Grid key={r} item>
          {Array.from({ length: CINEMA_ROOM_SIZE.columns }).map((_, c) => {
            const seat = `${String.fromCharCode(r + 65)}${c + 1}`;
            return (
              <IconButton
                key={c}
                title={seat}
                data-testid="iconesButton"
                disabled={bookingSeats.includes(seat)}
                onClick={() => toogleSeatClick(seat, setSelectedSeats)}
              >
                {selectedSeats.includes(seat) ? (
                  <ChairIcon color="primary" />
                ) : (
                  <ChairIcon />
                )}
              </IconButton>
            );
          })}
        </Grid>
      ))}
    </Grid>
  );
};
