import React from "react";
import "./Searchsection.css";
import { Link } from "react-router-dom";

const Searchsection = () => {
  return (
    <>
      <div className="searchsection">
        <div className="searchbar">
          <input type="text" placeholder="Search.." />
          <img src={require("./search.png")} alt="search button" />
        </div>
        <div className="categories">
          <span>Mountain</span>
          <span>Beaches</span>
          <span>Birds</span>
          <span>Food</span>
        </div>
      </div>
    </>
  );
};

export default Searchsection;
