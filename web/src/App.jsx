import { CssBaseline, ThemeProvider } from "@mui/material";

import { ShowAlert } from "./alert/ShowAlert";

import { darkTheme } from "./theme/dark";

import { FilmsProvider } from "./context/FilmsContext";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

export function App() {
  return (
    <FilmsProvider>
      <ThemeProvider theme={darkTheme}>
        <ShowAlert />
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </FilmsProvider>
  );
}
