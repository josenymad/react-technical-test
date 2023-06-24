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
      <div className="container">
        {searchResults.map((result, index) => (
          <img src={result} alt={`Result ${index}`} key={result} />
        ))}
      </div>
    </>
  );
};

export default SearchResults;
