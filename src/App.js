import React from 'react';
import './App.css';
import { Router,Routes, Route } from 'react-router-dom';
import AppHeader from './Header/AppHeader';
import Searchsection from './AppBody/Searchsection';
import DisplayImages from './Display/DisplayImages';

function App() {
  return (
    <div className="App">
      <>
        <AppHeader/>
        <Searchsection/>
        <DisplayImages/>
       {/* <Router>
       <Routes>
            <Route path='/' element={<DisplayImages/>} />
        </Routes>
       </Router> */}
      </>
    </div>
  );
}

export default App;
