import { Alert, Snackbar } from "@mui/material";
import { observer } from "mobx-react-lite";

export const ShowAlert = observer(({ AlertProps }) => {
  return (
    <Snackbar
      open={AlertProps.show}
      autoHideDuration={3000}
      onClose={() => AlertProps.onClose()}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
    >
      <Alert
        severity={AlertProps.severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {AlertProps.message}
      </Alert>
    </Snackbar>
  );
});
