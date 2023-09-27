import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegistrationPage from "./assets/components/layout/RegistrationPage.jsx";
import LogIn from "./assets/components/Layout/LogIn.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   // errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <RegistrationPage />,
      },
      {
        path: "/login",
        element: <LogIn />,
      }
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

  <RouterProvider router={router}></RouterProvider>
 
);
