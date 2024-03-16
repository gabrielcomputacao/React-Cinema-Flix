import { describe, expect, it } from "vitest";

import { valuetotal } from "./calculateValueTotal";

describe("Test function valuetotal", () => {
  it("should be return of accumulated value total", () => {
    const dataSelected = [
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
      {
        id: "0344",
        filmId: "8",
        session: "16:30",
        name: "Mary",
        seats: ["G7", "G8", "G9", "G10", "G11", "G12", "F7", "F8", "F9"],
        value: 135,
      },
      {
        id: "908e",
        filmId: "8",
        session: "21:00",
        name: "Fernando",
        seats: ["A4", "A5", "A6"],
        value: 60,
      },
      {
        id: "fb93",
        filmId: "8",
        session: "21:00",
        name: "Mauricio",
        seats: ["C5", "C6", "C7", "C8", "C9", "C10", "C11"],
        value: 140,
      },
    ];

    const value = valuetotal(dataSelected);

    expect(value).toEqual(2990);
  });
  it("should be return zero", () => {
    const value = valuetotal(null);

    expect(value).toEqual(0);
  });
});
