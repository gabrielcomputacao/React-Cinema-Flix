import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { Header } from "./Header";

it("should render correctly header", () => {
  render(<Header />);

  const messageElement = screen.getByText("Cinema Fácil");
  expect(messageElement).toBeInTheDocument();
});
