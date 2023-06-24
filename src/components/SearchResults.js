import React from "react";
import "../styles/search-results.css";

const SearchResults = ({ searchResults }) => {
  if (!searchResults.length) {
    return (
      <p>
        Have you searched yet? Either there's no results, or start exploring!
      </p>
    );
  }

  return (
    <>
      <p>Search Results</p>
      {searchResults.map((result, index) => (
        <img src={result} alt={`Result ${index}`} key={result} />
      ))}
    </>
  );
};

export default SearchResults;
