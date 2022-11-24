import React from 'react';
import Navbar from './Navbar/Navbar';
import Layout from './Layout/Layout';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration'
import Home from './Pages/Home/Home';
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

