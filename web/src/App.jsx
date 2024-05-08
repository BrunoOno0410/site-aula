import React from "react";
import { LandingPage } from "./pages/Home/Home";
import { LoginPage } from "./pages/Login/Login";
import "../output.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateAccountPage } from "./pages/Login/CreateAccount";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/create-account",
    element: <CreateAccountPage />,
  },
]);

export const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
