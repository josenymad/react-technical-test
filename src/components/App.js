import React from "react";
import "../styles/app.css";
import Search from "./Search";

const App = () => {
  return (
    <div className="app">
      <img className="app__nasa-logo" src={require("../images/nasa-worm-logo.jpg")} alt="nasa-logo" />
      <Search />
    </div>
  );
};

export default App;
