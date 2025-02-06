import React from "react";
import photo from "../assets/banner.png";
import { FaBook, FaChess, FaMusic, FaSun } from "react-icons/fa";

export default function About() {
  return (
    <div id="about" className="bg-base-200  min-h-screen py-12">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-primary from-10% to-secondary text-transparent bg-clip-text text-center">
        About Me
      </h2>
      <div className="hero ">
        <div className="hero-content max-w-full flex-col lg:flex-row">
          <div className="flex-1 flex flex-col lg:flex-row justify-end gap-2">
            <div className="relative">
              {/* Image */}
              <img
                src={photo}
                className="w-full rounded-lg shadow-2xl"
                alt="Descriptive Alt Text"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-transparent opacity-60 mix-blend-multiply rounded-lg"></div>
            </div>
            <div className="pt-8">
              <h2 className="flex gap-1 text-primary">
                <FaChess /> Play Online Chess at leisure
              </h2>
              <h2 className="flex gap-1 items-center text-secondary">
                <FaBook /> Read books on tech
              </h2>
              <h2 className="flex gap-1 items-center text-accent">
                <FaMusic /> Explore new music genres
              </h2>
              <h2 className="flex gap-1 items-center text-orange-600">
                <FaSun /> Traveling new places
              </h2>
            </div>
          </div>
          <div className="flex-1 p-8 lg:p-0">
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
