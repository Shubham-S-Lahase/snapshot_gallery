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
  return (
    <>
      <div className="searchsection">
        <div className="searchbar">
          <input type="text" placeholder="Search.." />
          <Link><img src={require("./search.png")} alt="search button"/></Link>
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
