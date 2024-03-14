import { render } from "@testing-library/react";
import { expect, it } from "vitest";
import { SelectSeat } from "./SelectSeat";
import { FilmsProvider } from "../context/FilmsContext";

it("shoudl be render SelectSeat component", () => {
  const { getByText } = render(
    <FilmsProvider>
      <SelectSeat />
    </FilmsProvider>
  );

  expect(getByText("Tela")).toBeInTheDocument();
});
