import React from "react";
import { render } from "@testing-library/react";
import Home from "../home";

describe("Home", () => {
  it("loads without crashing", () => {
    render(<Home />);
  });
});
