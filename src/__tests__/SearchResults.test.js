import React from "react";
import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("Search Results", () => {
  const validProps = [
    "../images/testImage1.jpeg",
    "../images/testImage2.jpeg",
    "../images/testImage3.jpeg",
  ];

  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults searchResults={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the right number of images", () => {
    render(<SearchResults searchResults={validProps} />);

    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(3);
  });

  it("renders 'Click and hold the images to zoom in!' after searching", () => {
    render(<SearchResults searchResults={validProps} />);

    const text = screen.getByText("Click and hold the images to zoom in!");

    expect(text).toBeInTheDocument();
  });

  it("renders message if no results or no search", () => {
    render(<SearchResults searchResults={[]} />);

    const text = screen.getByText(
      "Have you searched yet? Either there's no results, or start exploring!"
    );

    expect(text).toBeInTheDocument();
  });
});
