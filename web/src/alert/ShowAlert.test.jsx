import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ShowAlert } from "./ShowAlert";

import ShowAlertStore from "../store/ShowAlertStore";

describe("ShowAlert Component test", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders correctly", async () => {
    const fun = vi.fn();

    ShowAlertStore.setOnClose(fun);

    ShowAlertStore.setshowAlert("Same message", "success");

    await act(() => render(<ShowAlert AlertProps={ShowAlertStore} />));

    const messageElement = screen.getByText("Same message");
    expect(messageElement).toBeInTheDocument();
    expect(ShowAlertStore.onClose).not.toBeCalled();
    act(() => vi.advanceTimersByTime(3000));
    expect(ShowAlertStore.onClose).toBeCalled();
  });
});
