import { act, fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";
import { afterEach, describe, expect, it, vi } from "vitest";
import { App } from "../App";

describe("DetailsFilm Page test", () => {
  afterEach(() => {
    vi.restoreAllMocks();
    render(<App />);
  });

  it("renders correctly", async () => {
    vi.spyOn(axios, "get").mockResolvedValue({ data: [] });

    await act(() => render(<App />));

    const titleElement = screen.getByText("Gestão Flix");
    fireEvent.click(titleElement);

    const secondTitleElement = screen.getByText("Gestão Fácil Flix");
    const subTitleElement = screen.getByText("SELECIONE UM FILME");
    expect(secondTitleElement).toBeInTheDocument();
    expect(subTitleElement).toBeInTheDocument();
  });

  it("renders with display films", async () => {
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
    const filmsElements = screen.getAllByTestId("film-display");
    expect(filmsElements).toHaveLength(3);

    expect(
      filmsElements.map((f) => f.getElementsByTagName("h6")[0].innerHTML)
    ).toEqual(["Film 1", "Film 2", "Film 3"]);
  });
});
