import { Box, Button, TextField } from "@mui/material";

export const ButtonConfirm = ({ bookingName, setBookingName }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <TextField
        name="name"
        id="name"
        label="Nome"
        placeholder="Responsável pela reserva"
        value={bookingName}
        onChange={({ target }) => setBookingName(target.value)}
      />
      <Button type="submit" variant="contained">
        Confirmar
      </Button>
    </Box>
  );
};
