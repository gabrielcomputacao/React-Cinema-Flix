import { Alert, Snackbar } from "@mui/material";
import { useContextFilms } from "../hooks/useContextFilms";

export const ShowAlert = () => {
  const { showAlert, onClose } = useContextFilms();

  return (
    <Snackbar
      open={showAlert.show}
      autoHideDuration={3000}
      onClose={() => onClose()}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity={showAlert.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {showAlert.message}
      </Alert>
    </Snackbar>
  );
};
