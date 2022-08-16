import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route to='#' element={Home}/>
      </Routes>
    </>
  );
}

export default App;
