import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { ShowAlert } from "./alert/ShowAlert";
import { CheckoutPage } from "./page/CheckoutPage";
import { SelectionPage } from "./page/SelectionPage";
import { darkTheme } from "./theme/dark";

export function App() {
  const [selectedFilm, setSelectedFilm] = useState();
  const [showAlert, setshowAlert] = useState();

  return (
    <ThemeProvider theme={darkTheme}>
      {showAlert && <ShowAlert message={showAlert.message} severity={showAlert.severity} onClose={() => setshowAlert()} />}
      <CssBaseline />
      {selectedFilm
        ? <CheckoutPage selectedFilm={selectedFilm} showAlert={(message, severity) => setshowAlert({ message, severity })} done={() => setSelectedFilm()} />
        : <SelectionPage setSelectedFilm={setSelectedFilm} />

      }
    </ThemeProvider>
  )
}