import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Searchsection.css";
import { useContext } from "react";
import { CategoryContext } from "../context";

const Searchsection = () => {
  const {setCategory} = useContext(CategoryContext);

  const getCategory = (event)=> {
    // console.log(event.target.innerHTML);
    setCategory(event.target.innerHTML);
  }
  const getValue = () => {
    setCategory(document.getElementById("searchinput").value)
    document.getElementById("searchinput").value ="";
  }
  return (
    <>
      <div className="searchsection">
        <div className="searchbar">
          <input type="text" id="searchinput" placeholder="Search.."/>
          <Link to={`/search`}><img src={require("./search.png")} alt="search button" onClick={getValue} /></Link>
        </div>
        <div className="categories">
          <span onClick={getCategory}>Home</span>
          <span onClick={getCategory}>Mountain</span>
          <span onClick={getCategory}>Beaches</span>
          <span onClick={getCategory}>Birds</span>
          <span onClick={getCategory}>Food</span>
        </div>
      </div>
    </>
  );
};

export default Searchsection;
