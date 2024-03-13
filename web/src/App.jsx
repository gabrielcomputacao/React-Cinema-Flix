import { CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { ShowAlert } from "./alert/ShowAlert";
import { CheckoutPage } from "./page/CheckoutPage";
import { SelectionPage } from "./page/SelectionPage";
import { darkTheme } from "./theme/dark";

import ShowAlertStore from "./store/ShowAlertStore";

export function App() {
  const [selectedFilm, setSelectedFilm] = useState();

  return (
    <ThemeProvider theme={darkTheme}>
      <ShowAlert AlertProps={ShowAlertStore} />
      <CssBaseline />
      {selectedFilm ? (
        <CheckoutPage
          selectedFilm={selectedFilm}
          showAlert={(message, severity) =>
            ShowAlertStore.setshowAlert(message, severity)
          }
          done={() => setSelectedFilm()}
        />
      ) : (
        <SelectionPage setSelectedFilm={setSelectedFilm} />
      )}
    </ThemeProvider>
  );
}
