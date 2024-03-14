import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import { ButtonConfirm } from "./ButtonConfirm";

it("should render correctly the Button Confirm", () => {
  const handleChange = vi.fn();

  const { getByLabelText } = render(
    <ButtonConfirm bookingName="" setBookingName={handleChange} />
  );

  fireEvent.change(getByLabelText("Nome"), { target: { value: "gabriel" } });

  const messageElement = screen.getByText("Confirmar");
  expect(messageElement).toBeInTheDocument();
  expect(handleChange).toHaveBeenCalled(1);
});
