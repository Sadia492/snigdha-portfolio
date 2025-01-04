import React from "react";
import Navbar from "../components/Navbar";
import { Link, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import MyWorks from "../pages/MyWorks";
import Education from "../components/Education";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import { FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";

export default function MainLayout() {
  const scrollToHome = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      window.scrollTo({
        top: homeSection.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <MyWorks></MyWorks>
      <Contact></Contact>
      <Footer></Footer>
      <div className="fixed right-0 bottom-0">
        <Link
          onClick={scrollToHome} // Duration of the scroll (in milliseconds)
          className="flex justify-center items-center -rotate-90 text-primary font-bold text-2xl p-4 rounded-full"
        >
          <FaArrowRight className="text-4xl"></FaArrowRight>
        </Link>
      </div>
    </div>
  );
}
