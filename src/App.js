import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import Login from './Components/Pages/Login/Login';
import Registration from './Components/Pages/Registration/Registration'
import Home from './Components/Pages/Home/Home';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path = "/" element={<Layout />}>
              {/*public routes */}
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Registration />} />

              {/*we want to protect these routes*/}
              <Route path="/" element={<Home />} />
              
              {/* catch all*/}
              {/*<Route path="*" element={<Missing />} /> */}
          </Route>
      </Routes>
    </>
  );
}

export default App;

