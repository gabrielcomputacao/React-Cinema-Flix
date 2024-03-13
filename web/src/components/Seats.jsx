import ChairIcon from "@mui/icons-material/Chair";
import { Grid, IconButton } from "@mui/material";
const CINEMA_ROOM_SIZE = Object.freeze({
  rows: 10,
  columns: 15,
});

export const Seats = ({
  lockSeats = [],
  selectedSeats = [],
  toogleSeatClick,
}) => {
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
                disabled={lockSeats.includes(seat)}
                onClick={() => toogleSeatClick(seat)}
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
