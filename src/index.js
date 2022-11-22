import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './Components/Pages/Login/Login';
import Registration from './Components/Pages/Registration/Registration'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/Register',
    element: <Registration />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <RouterProvider router={router} />
)
