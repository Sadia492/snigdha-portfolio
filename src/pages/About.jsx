import React from "react";
import photo from "../assets/photo_2025-01-04_10-52-08.jpg";
import { FaBook, FaChess, FaMusic, FaSun } from "react-icons/fa";

export default function About() {
  return (
    <div id="about">
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex-1 flex justify-end gap-2">
            <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
            <div className="pt-8">
              <h2 className="flex gap-1">
                <FaChess /> Play Online Chess at leisure
              </h2>
              <h2 className="flex gap-1 items-center">
                <FaBook /> Read books on tech
              </h2>
              <h2 className="flex gap-1 items-center">
                <FaMusic /> Explore new music genres
              </h2>
              <h2 className="flex gap-1 items-center">
                <FaSun /> Traveling new places
              </h2>
            </div>
          </div>
          <div className="flex-1">
            {/* <h1 className="text-5xl font-bold">Box Office News!</h1> */}
            <p className="py-6">
              Hi, I'm Snigdha, a passionate web developer focused on creating
              visually appealing and intuitive websites. With experience in
              front-end development, I strive to craft seamless user experiences
              that engage and inspire. Whether it’s through responsive design or
              smooth interactions, I ensure every detail is thoughtfully
              executed.
            </p>
            <p className="py-6">
              I'm driven by a love for problem-solving and the joy of
              transforming ideas into functional, accessible digital products. I
              have worked on various projects, including responsive websites,
              e-commerce platforms, and interactive apps, and I am always eager
              to collaborate on exciting new ventures.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
