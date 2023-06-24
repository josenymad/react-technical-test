import React, { useState } from "react";
import "../styles/search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => setValue(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="search"
        placeholder="Enter image keywords here"
        onChange={handleInputChange}
      />
      <input className="search__button" type="submit" value="Search" />
    </form>
  );
};

export default Search;
