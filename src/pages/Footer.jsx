import React from "react";
import logo from "../assets/logo1.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className=" bg-neutral text-neutral-content">
      <div className="w-11/12 mx-auto footer items-center p-4">
        <aside className="grid-flow-col items-center">
          <img className="w-20" src={logo} alt="" />
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className="flex flex-row gap-4 items-center mb-4">
            <Link
              target="_blank"
              to="https://www.facebook.com/profile.php?id=100077898306645"
            >
              <FaFacebook className="text-4xl"></FaFacebook>
              {/* <img src={fbLogo} alt="" /> */}
            </Link>

            <Link target="_blank" to="https://github.com/Sadia492">
              <FaGithub className="text-4xl"></FaGithub>
            </Link>
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/sadia-afrin01/"
            >
              <FaLinkedin className="text-4xl"></FaLinkedin>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
