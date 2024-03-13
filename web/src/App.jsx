import { CssBaseline, ThemeProvider } from "@mui/material";

import { ShowAlert } from "./alert/ShowAlert";

import { SelectionPage } from "./page/SelectionPage";
import { darkTheme } from "./theme/dark";

import ShowAlertStore from "./store/ShowAlertStore";
import { SelectedFilmProvider } from "./context/SelectedFilmContext";

export function App() {
  return (
    <SelectedFilmProvider>
      <ThemeProvider theme={darkTheme}>
        <ShowAlert AlertProps={ShowAlertStore} />
        <CssBaseline />

        <SelectionPage />
      </ThemeProvider>
    </SelectedFilmProvider>
  );
}
