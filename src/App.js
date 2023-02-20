import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppHeader from "./Header/AppHeader";
import Searchsection from "./AppBody/Searchsection";
import DisplayImages from "./Display/DisplayImages";
import CategoryContextProvider from "./context";
function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
        <CategoryContextProvider>
        <AppHeader/>
        <Searchsection/>
        <DisplayImages>
          <Routes>
            <Route index path="/"/>
          </Routes>
        </DisplayImages>
        </CategoryContextProvider>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
