import React from "react";
import photo from "../assets/photo_2025-01-04_09-49-48.jpg";
import bg from "../assets/ai-generated-9132637_1280.jpg";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import fbLogo from "../assets/icons8-facebook-logo-48.png";

export default function Home() {
  return (
    <div id="home">
      <div
        className="hero text-white min-h-screen"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1">
            <p>Hi, I am Sadia Afrin Snigdha</p>
            <h1 className="text-5xl font-bold">Frontend Developer</h1>
            <p className="py-6">
              I specialize in crafting visually captivating and user-friendly
              websites. With a keen focus on responsive design and smooth
              interactions, I ensure every detail is meticulously crafted. My
              goal is to bring your vision to life, transforming ideas into
              seamless online experiences. Explore my portfolio to discover how
              we can collaborate to create something truly impactful
            </p>
            <div className="flex items-center">
              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=100077898306645"
              >
                <img src={fbLogo} alt="" />
              </Link>

              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=100077898306645"
              >
                <FaGithub className="text-4xl"></FaGithub>
              </Link>
              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=100077898306645"
              >
                <FaLinkedin className="text-4xl"></FaLinkedin>
              </Link>
            </div>
            <Link target="_blank" to="https://drive.google.com/drive/u/0/home">
              <button className="btn btn-primary">Download Resume</button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
