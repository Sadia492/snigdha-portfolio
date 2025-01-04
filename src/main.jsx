import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  BrowserRouter,
  createBrowserRouter,
  HashRouter,
  RouterProvider,
} from "react-router-dom";
import router from "./routes/Router.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MainLayout></MainLayout>
    </BrowserRouter>

    {/* <RouterProvider router={router}></RouterProvider> */}
  </StrictMode>
);
