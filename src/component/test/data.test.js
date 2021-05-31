import React from "react";
import { render } from "@testing-library/react";
import Data from "../home";

describe("Data", () => {
  it("loads without crashing", () => {
    render(<Data />);
  });
});
