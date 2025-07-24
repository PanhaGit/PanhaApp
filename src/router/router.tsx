// src/router/router.tsx
import React from "react";
import { RouteObject } from "react-router-dom";

import MasterLayout from "../components/layouts/MasterLayout";
import MasterLayoutError from "../components/layouts/error/MasterLayoutError";
import Home from "../page/home/Home";
import Resume from "../page/resume/Resume";
import Contact from "../components/Contact";
import NotFound404 from "../page/error/NotFound404";

export const RouterApp: RouteObject[] = [
  {
    path: "/",
    element: <MasterLayout />,
    // <-- any thrown (or loader/action) error in this branch
    //     will render MasterLayoutError
    errorElement: <MasterLayoutError />,
    children: [
      { index: true, element: <Home /> },
      { path: "resume", element: <Resume /> },
      { path: "contact", element: <Contact id="Contact" /> },
      // 404 fallback
      { path: "*", element: <NotFound404 /> },
    ],
  },
];
