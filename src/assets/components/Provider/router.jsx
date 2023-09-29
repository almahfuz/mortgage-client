import React from 'react';
import LogIn from '../Layout/LogIn';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainPage/MainLayout/MainLayout';
import Home from '../Home/Home';

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      //errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <LogIn />,
        },
        
       
      ],
    },
  ]);

export default router;