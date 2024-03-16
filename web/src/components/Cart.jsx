import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { toogleSeatClick } from "../utils/toogleSeatClick";
import { useContextFilms } from "../hooks/useContextFilms";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export const Cart = () => {
  const { selectedSeats, selectedSession, setSelectedSeats } =
    useContextFilms();

  return (
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
              <IconButton
                onClick={() => toogleSeatClick(seat, setSelectedSeats)}
              >
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
        Total:
        {formatter.format((selectedSeats.length * selectedSession?.value) | 0)}
      </Typography>
    </Box>
  );
};
