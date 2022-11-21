import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Registration from './Components/Registration/Registration';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className ="App">
      <Navbar />
      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/login' element={<Login/>}/>
        <Route path ='/registratoion' element={<Registration/>}/>
      </Routes>

    </div>
  );
}

export default App;

