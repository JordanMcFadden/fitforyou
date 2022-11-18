import React from 'react';
import logo from './Images/logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <Login />
      <Registration />
    </div>
  );
}

export default App;

