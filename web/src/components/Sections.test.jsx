import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import { act } from "react-dom/test-utils";
import { Sections } from "./Sections";
import { FilmsProvider } from "../context/FilmsContext";

it("shoudl be render Section component", async () => {
  await act(
    render(
      <>
        <FilmsProvider>
          <Sections />
        </FilmsProvider>
      </>
    )
  );

  expect(screen.getAllByTestId("sessions-film")).toHaveLength(3);
});
