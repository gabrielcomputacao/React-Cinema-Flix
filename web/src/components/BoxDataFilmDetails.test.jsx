import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { FilmsContext } from "../context/FilmsContext";
import { BoxDataFilmDetails } from "./BoxDataFilmDetails";

it("shoudl be render BoxDataFilmDetails component", () => {
  const selectedFilm = {
    id: "1",
    name: "Titanic",
    sinopse:
      'Um romance trágico floresce entre um passageiro pobre e uma aristocrata a bordo do "inafundável" RMS Titanic, enfrentando a catástrofe iminente.',
    url: "https://image.tmdb.org/t/p/original/vpsvHLkoeKUjceIMeNSqCp3xEyY.jpg",
    sessions: [
      {
        session: "15:00",
        value: 10,
      },
      {
        session: "17:00",
        value: 10,
      },
      {
        session: "19:30",
        value: 15,
      },
    ],
  };

  const dataSelectedFilm = [
    {
      id: "8e7c",
      filmId: "8",
      session: "16:30",
      name: "Antonio",
      seats: ["D6", "D7", "D8", "D9"],
      value: 60,
    },
    {
      id: "7ee3",
      filmId: "8",
      session: "16:30",
      name: "Mauro",
      seats: ["B7", "B11", "B10", "B9", "B8"],
      value: 75,
    },
  ];

  render(
    <FilmsContext.Provider value={{ selectedFilm }}>
      <BoxDataFilmDetails dataSelectedFilm={dataSelectedFilm} />
    </FilmsContext.Provider>
  );

  const valueViewerInScreen = screen.getByText("R$ 615");

  expect(valueViewerInScreen).toBeInTheDocument();
});
