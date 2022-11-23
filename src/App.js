import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Pages/Login/Login'
import Registration from './Components/Pages/Registration/Registration'
import Home from './Components/Pages/Home/Home';

import {Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <Navbar />
      <main className="App">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/Login" element = {<Login />} />
          <Route path="/SignUp" element = {<Registration />} />
        </Routes>
      </main>
   </>
  );
}

export default App;

