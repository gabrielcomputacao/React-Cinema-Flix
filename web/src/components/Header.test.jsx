import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { App } from "../App";

it("should render correctly header", () => {
  render(<App />);

  const messageElement = screen.getByText("Cinema Fácil");
  expect(messageElement).toBeInTheDocument();
});
