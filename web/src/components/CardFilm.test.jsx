import { render, screen } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { expect, it, vi } from "vitest";
import { App } from "../App";

it("should be render correctly CardFilm", async () => {
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

  const filmElement = screen.getByText("Film 1");

  expect(filmElement).toBeInTheDocument();
});
