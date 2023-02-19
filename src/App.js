import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppHeader from './Header/AppHeader';
import Searchsection from './AppBody/Searchsection';
import DisplayImages from './Display/DisplayImages';

function App() {
  return (
    <div className="App">
      <>
        <AppHeader/>
        <Searchsection/>
        <DisplayImages>
          <Routes>
            <Route path='/' index element={} />
          </Routes>
        </DisplayImages>
      </>
    </div>
  );
}

export default App;
