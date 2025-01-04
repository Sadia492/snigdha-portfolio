import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import MyWorks from "../pages/MyWorks";
import Education from "../components/Education";

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <MyWorks></MyWorks>
    </div>
  );
}
