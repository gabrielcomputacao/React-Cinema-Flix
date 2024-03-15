import { createBrowserRouter } from "react-router-dom";
import { SelectionPage } from "./page/SelectionPage";
import { CheckoutPage } from "./page/CheckoutPage";
import { DetailsFilm } from "./page/DetailsFilm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectionPage />,
  },
  {
    path: "/:id",
    element: <CheckoutPage />,
  },
  {
    path: "/details",
    element: <DetailsFilm />,
  },
]);
