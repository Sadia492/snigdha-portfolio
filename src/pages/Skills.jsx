import React from "react";
import html from "../assets/html_sx3o4c.png";
import css from "../assets/css_llfioq.png";
import javascript from "../assets/javascript_wpr45g.png";
import tailwind from "../assets/tailwindcss_xvxlaw.png";
import daisy from "../assets/favicon-192.png";

export default function Skills() {
  return (
    <div id="skills">
      <div className="h-screen w-11/12 mx-auto">
        <div className="bg-gray-400">
          <h2>
            These include, but are not limited to, the technologies I use for
            building client-side applications
          </h2>
          <div className="py-8 px-16 flex justify-between">
            <img
              className="grayscale hover:grayscale-0 transition duration-200 w-32 hover:scale-110"
              src={html}
              alt=""
            />
            <img
              className="grayscale hover:grayscale-0 transition duration-200 w-32 hover:scale-110"
              src={css}
              alt=""
            />
            <img
              className="grayscale hover:grayscale-0 transition duration-200 w-32 hover:scale-110"
              src={javascript}
              alt=""
            />
            <img
              className="grayscale hover:grayscale-0 transition duration-200 w-32 hover:scale-110"
              src={tailwind}
              alt=""
            />
            <img
              className="grayscale hover:grayscale-0 transition duration-200 w-32 hover:scale-110"
              src={daisy}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
