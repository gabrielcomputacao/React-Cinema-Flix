import { expect, it, vi } from "vitest";

import { toogleSeatClick } from "./toogleSeatClick";

it("should be return of accumulated value total", () => {
  const setSeats = vi.fn();

  toogleSeatClick(7, setSeats);

  expect(setSeats).toBeCalled(1);
  expect(toogleSeatClick(7, setSeats)).toBeUndefined();
});
