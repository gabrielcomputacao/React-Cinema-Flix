import { createBrowserRouter } from "react-router-dom";
import { SelectionPage } from "./page/SelectionPage";
import { CheckoutPage } from "./page/CheckoutPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SelectionPage />,
  },
  {
    path: "/:id",
    element: <CheckoutPage />,
  },
]);
