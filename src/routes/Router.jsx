import { createHashRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";

const router = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
