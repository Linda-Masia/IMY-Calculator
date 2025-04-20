import React from "react";
import { screen, render } from "@testing-library/react";

import Calculator from "@/app/page";
import "@testing-library/jest-dom";

describe("Calculator Component", () => {
  it("renders the calculator UI", () => {
    render(<Calculator />);
    expect(screen.getByRole("button", { name: "0" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "A" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "C" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "=" })).toBeInTheDocument();
  });
});
