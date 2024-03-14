import { Paper, Typography } from "@mui/material";
import { Seats } from "./Seats";

export const SelectSeat = () => {
  return (
    <Paper sx={{ gridRow: "2 / 4", padding: "1rem" }}>
      <Typography variant="h6">Selecione seu(s) assento(s)</Typography>
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
      <Seats />
    </Paper>
  );
};
