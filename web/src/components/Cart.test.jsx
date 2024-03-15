import { act } from "react-dom/test-utils";
import { expect, it, vi } from "vitest";
import { App } from "../App";
import { fireEvent, render, screen } from "@testing-library/react";
import axios from "axios";

it("should be render Cart ", async () => {
  vi.spyOn(axios, "get").mockResolvedValue({
    data: [
      {
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
      },
      {
        id: "2",
        name: "De volta para o Futuro",
        sinopse:
          "Um adolescente viaja no tempo em um DeLorean modificado e tenta garantir que seus pais se apaixonem para preservar seu futuro.",
        url: "https://i.pinimg.com/originals/91/11/57/911157d7fafe13b698e914117f919d6b.jpg",
        sessions: [
          {
            session: "15:00",
            value: 10,
          },
          {
            session: "17:00",
            value: 15,
          },
        ],
      },
    ],
  });

  await act(() => render(<App />));

  const elementCardFilm = screen.getByText("Titanic");

  fireEvent.click(elementCardFilm);

  const elementSession = screen.getByText("15:00");

  fireEvent.click(elementSession);

  const elementIconButton = screen.getAllByTestId("iconesButton");

  fireEvent.click(elementIconButton[0]);

  const elementCart = screen.getByText("Carrinho");

  expect(elementCart).toBeInTheDocument();
});
