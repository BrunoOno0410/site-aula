import React from "react";
import { LandingPage } from "./pages/Home/Home";
import { LoginPage } from "./pages/Login/Login";
import "../output.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CreateAccountPage } from "./pages/Login/CreateAccount";
import { ForgotPasswordPage } from "./pages/Login/ForgotPassword";
import { CoursesList } from "./pages/Aulas/CoursesList";
import { ClassesModel } from "./pages/Aulas/cursos/ClassesModel";

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
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/aulas",
    element: <CoursesList />,
  },
  {
    path: "/modelo",
    // path: "/cursos/:courseId/lessons/:lessonId",
    element: <ClassesModel />,
  },
]);

export const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
