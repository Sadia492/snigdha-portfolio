import React from "react";
import photo from "../assets/pixelcut-export.png";
import bg from "../assets/optical-lens-flare-effect-with-glowing-sparkle-light-4k-colorful-on-black-background-3d-rendering-animation-transtition-free-video.jpg";
import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import fbLogo from "../assets/icons8-facebook-logo-48.png";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div id="home" className="">
      <div
        className="text-white pt-12 min-h-screen bg-black/60 bg-blend-overlay"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex min-h-screen w-11/12 mx-auto flex-col-reverse  lg:flex-row">
          <div className="flex-1 flex flex-col pl-8 justify-center items-start">
            <p className="text-accent font-medium">
              <span className="text-4xl">Hey</span>, I am Sadia Afrin Snigdha
            </p>
            <h1 className="text-5xl font-bold text-primary">
              {/* Frontend Developer */}
              <Typewriter
                words={[" Frontend Developer"]}
                loop={true} // Set to true to loop through the words
                cursor
                cursorStyle="_"
                typeSpeed={130} // Adjust typing speed (default is 100)
                deleteSpeed={100} // Adjust delete speed (default is 50)
                delaySpeed={1000} // Delay between typing and deleting (default is 1000)
              />
            </h1>
            <p className="py-6">
              I specialize in crafting visually captivating and user-friendly
              websites. With a keen focus on responsive design and smooth
              interactions, I ensure every detail is meticulously crafted. My
              goal is to bring your vision to life, transforming ideas into
              seamless online experiences. Explore my portfolio to discover how
              we can collaborate to create something truly impactful
            </p>
            <div className="xl:absolute left-0 top-1/2">
              <div className="flex xl:flex-col flex-row gap-4 items-center mb-4">
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
            </div>
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1B5Octi2DKgoUQ2VR7znym4HX5MFtlKEf/view?usp=drive_link"
            >
              <button className="btn bg-gradient-to-r from-secondary to-primary text-white">
                Download Resume
              </button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center ">
            <img
              src={photo}
              className="w-1/2 rounded-lg shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
