import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("uses the right source for image", () => {
    render(<App />);
    const image = screen.getByAltText("nasa-logo");

    expect(image.src).toContain(require("../images/nasa-worm-logo.jpg"));
  });

  it("renders the image", () => {
    render(<App />);
    const image = screen.getByAltText("nasa-logo");

    expect(image).toBeInTheDocument();
  });
});
