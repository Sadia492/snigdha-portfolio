import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo1.png";

export default function Navbar() {
  const { hash } = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
      <a href="#home">
        <li>Home</li>
      </a>
      <a href="#about">About</a>

      <a href="#skills">
        <li>Skills & Education</li>
      </a>
      <a href="#myworks">
        <li>My Works</li>
      </a>
      <a href="#contact">
        <li>Contact</li>
      </a>
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 z-10 text-white transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-primary/50 backdrop-blur-md text-white" // Background color when scrolled on homepage
          : "bg-transparent" // Transparent background on homepage
      }`}
    >
      <div className="navbar lg:w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          {/* <a className="text-2xl font-bold">daisyUI</a> */}
          <img className="w-20" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://drive.google.com/drive/u/0/home"
            target="_blank"
            className="btn bg-gradient-to-r from-secondary to-primary text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}
