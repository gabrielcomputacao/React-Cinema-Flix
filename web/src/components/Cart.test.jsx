import {
    act
} from "react-dom/test-utils";
import {
    it
} from "vitest";
import {
    Cart
} from "./Cart";

it("should be render list selected seats ", async () => {
    const mockList = ["ana", "maria", "gabriel"];

    await act(() => < Cart / > );
});