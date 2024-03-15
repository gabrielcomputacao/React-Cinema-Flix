import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { expect, it, vi } from "vitest";

import axios from "axios";
import { App } from "../App";

it("should be render correctly ListCardFilm", async () => {
  vi.spyOn(axios, "get").mockResolvedValue({
    data: [
      {
        id: "1",
        name: "Film 1",
        url: "https://foo.com/bar.jpg",
      },
      {
        id: "2",
        name: "Film 2",
        url: "https://foo.com/bar.jpg",
      },
      {
        id: "3",
        name: "Film 3",
        url: "https://foo.com/bar.jpg",
      },
    ],
  });

  await act(() => render(<App />));

  const elementListCardFilms = screen.getAllByTestId("film-display");

  expect(elementListCardFilms).toHaveLength(3);
});
