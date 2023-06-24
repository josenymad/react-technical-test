import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("has a text input", () => {
    render(<Search />);

    const searchInput = screen.getByPlaceholderText(
      "Enter image keywords here"
    );

    expect(searchInput).toBeInTheDocument();
  });

  it("has a submit button", () => {
    render(<Search />);

    const searchButton = screen.getAllByRole("button");

    expect(searchButton).toHaveLength(1);
  });

  it("has a submit button displaying Search", () => {
    render(<Search />);

    const searchButton = screen.getByRole("button");

    expect(searchButton).toHaveDisplayValue("Search");
  });
});
