import React from "react";
import html from "../assets/html_sx3o4c.png";
import css from "../assets/css_llfioq.png";
import javascript from "../assets/javascript_wpr45g.png";
import tailwind from "../assets/tailwindcss_xvxlaw.png";
import daisy from "../assets/favicon-192.png";
import node from "../assets/Node.js_logo.svg.png";
import mongodb from "../assets/icons8-mongodb-48.png";
import express from "../assets/express_r3isbu.png";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Education from "../components/Education";

export default function Skills() {
  // React Slick settings
  const settings = {
    infinite: true, // Make the slider infinite
    slidesToShow: 3.5, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2050, // 5 seconds interval between auto-slides
    speed: 2000, // Set slide speed to 3000ms (3 seconds)
    arrows: false, // Disable default arrows
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 slides at a time for medium screens
          centerMode: true, // Optional: Center the active slide
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1, // 1 slide at a time for small screens
        },
      },
    ],
  };

  const sliderRef = React.useRef(null); // Ref to access the Slider instance

  // Handle custom arrows
  const goToNext = () => sliderRef.current.slickNext();
  const goToPrev = () => sliderRef.current.slickPrev();
  return (
    <div id="skills">
      <div className="mx-auto">
        <div className="">
          <h2></h2>

          <div className="py-8 px-16">
            <div className="mx-auto px-4 py-16">
              <div className="flex justify-between items-center">
                <div className=" mb-8">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-primary from-0 to-15% to-secondary text-transparent bg-clip-text">
                    SKILLs
                  </h2>
                  <p className="text-gray-400 mt-4 lg:w-3/5">
                    These include, but are not limited to, the technologies I
                    use for building applications
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="bg-gray-800 text-white p-3 rounded-full shadow-lg"
                    onClick={goToPrev}
                  >
                    <FaChevronLeft size={24} />
                  </button>
                  <button
                    className=" bg-gray-800 text-white p-3 rounded-full shadow-lg"
                    onClick={goToNext}
                  >
                    <FaChevronRight size={24} />
                  </button>
                </div>
              </div>

              <div className="relative h-full mx-auto">
                <Slider ref={sliderRef} {...settings}>
                  <div className="p-4 group">
                    <div className="bg-gray-200 p-8 rounded-2xl border-2 border-black/40 hover:bg-white hover:shadow-2xl  hover:border-none transition-all duration-500 space-y-4 between h-72 overflow-hidden">
                      <div className="bg-gradient-to-tr from-secondary to-primary w-fit p-2 rounded-lg">
                        <img
                          className="w-14 grayscale group-hover:scale-110 transition duration-200 group-hover:grayscale-0"
                          src={html}
                          alt=""
                        />
                      </div>
                      <h3 className="font-semibold text-xl">HTML</h3>
                      <p className="text-gray-600 mt-2">
                        Skilled in crafting well-structured, semantic HTML to
                        create accessible and SEO-friendly web pages that
                        provide a solid foundation for modern web design.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 group">
                    <div className="bg-gray-200 p-8 rounded-2xl border-2 border-black/40 hover:bg-white hover:shadow-2xl  hover:border-none transition-all duration-500 space-y-4 between h-72 overflow-hidden">
                      <div className="bg-gradient-to-tr from-secondary to-primary w-fit p-2 rounded-lg">
                        <img
                          className="w-14 grayscale group-hover:scale-110 transition duration-200 group-hover:grayscale-0"
                          src={css}
                          alt=""
                        />
                      </div>
                      <h3 className="font-semibold text-xl">CSS</h3>
                      <p className="text-gray-600 mt-2">
                        Skilled in CSS, creating visually appealing, responsive,
                        and user-friendly designs with a focus on precision and
                        modern styling techniques.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 group">
                    <div className="bg-gray-200 p-8 rounded-2xl border-2 border-black/40 hover:bg-white hover:shadow-2xl  hover:border-none transition-all duration-500 space-y-4 between h-72 overflow-hidden">
                      <div className="bg-gradient-to-tr from-secondary to-primary w-fit p-2 rounded-lg">
                        <img
                          className="w-14 grayscale group-hover:scale-110 transition duration-200 group-hover:grayscale-0"
                          src={javascript}
                          alt=""
                        />
                      </div>
                      <h3 className="font-semibold text-xl">JavaScript</h3>
                      <p className="text-gray-600 mt-2">
                        Proficient in JavaScript, crafting dynamic, interactive,
                        and efficient functionalities to enhance user experience
                        and build scalable web applications.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 group">
                    <div className="bg-gray-200 p-8 rounded-2xl border-2 border-black/40 hover:bg-white hover:shadow-2xl  hover:border-none transition-all duration-500 space-y-4 between h-72 overflow-hidden">
                      <div className="bg-gradient-to-tr from-secondary to-primary w-fit p-2 rounded-lg">
                        <img
                          className="w-14 grayscale group-hover:scale-110 transition duration-200 group-hover:grayscale-0"
                          src={tailwind}
                          alt=""
                        />
                      </div>
                      <h3 className="font-semibold text-xl">Tailwind Css</h3>
                      <p className="text-gray-600 mt-2">
                        Skilled in utilizing TailwindCSS to design highly
                        responsive, utility-first, and customizable user
                        interfaces, ensuring clean and maintainable code for
                        modern web applications.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 group">
                    <div className="bg-gray-200 p-8 rounded-2xl border-2 border-black/40 hover:bg-white hover:shadow-2xl  hover:border-none transition-all duration-500 space-y-4 between h-72 overflow-hidden">
                      <div className="bg-gradient-to-tr from-secondary to-primary w-fit p-2 rounded-lg">
                        <img
                          className="w-14 grayscale group-hover:scale-110 transition duration-200 group-hover:grayscale-0"
                          src={daisy}
                          alt=""
                        />
                      </div>
                      <h3 className="font-semibold text-xl">Daisy UI</h3>
                      <p className="text-gray-600 mt-2">
                        Proficient in leveraging DaisyUI to rapidly build
                        responsive, aesthetically pleasing, and customizable
                        components.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 group">
                    <div className="bg-gray-200 p-8 rounded-2xl border-2 border-black/40 hover:bg-white hover:shadow-2xl  hover:border-none transition-all duration-500 space-y-4 between h-72 overflow-hidden">
                      <div className="bg-gradient-to-tr from-secondary to-primary w-fit p-2 rounded-lg">
                        <img
                          className="w-14 grayscale group-hover:scale-110 transition duration-200 group-hover:grayscale-0"
                          src={node}
                          alt=""
                        />
                      </div>
                      <h3 className="font-semibold text-xl">Node JS</h3>
                      <p className="text-gray-600 mt-2">
                        Proficient in Node.js, building scalable and efficient
                        server-side applications with a focus on performance and
                        seamless API integration.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 group">
                    <div className="bg-gray-200 p-8 rounded-2xl border-2 border-black/40 hover:bg-white hover:shadow-2xl  hover:border-none transition-all duration-500 space-y-4 between h-72 overflow-hidden">
                      <div className="bg-gradient-to-tr from-secondary to-primary w-fit p-2 rounded-lg">
                        <img
                          className="w-14 grayscale group-hover:scale-110 transition duration-200 group-hover:grayscale-0"
                          src={mongodb}
                          alt=""
                        />
                      </div>
                      <h3 className="font-semibold text-xl">Mongo DB</h3>
                      <p className="text-gray-600 mt-2">
                        Skilled in MongoDB, creating and managing robust NoSQL
                        databases for scalable, high-performance applications.
                      </p>
                    </div>
                  </div>
                  <div className="p-4 group">
                    <div className="bg-gray-200 p-8 rounded-2xl border-2 border-black/40 hover:bg-white hover:shadow-2xl  hover:border-none transition-all duration-500 space-y-4 between h-72 overflow-hidden">
                      <div className="bg-gradient-to-tr from-secondary to-primary w-fit p-2 rounded-lg">
                        <img
                          className="w-14 grayscale group-hover:scale-110 transition duration-200 group-hover:grayscale-0"
                          src={express}
                          alt=""
                        />
                      </div>
                      <h3 className="font-semibold text-xl">Express JS</h3>
                      <p className="text-gray-600 mt-2">
                        Proficient in Express.js, building efficient and
                        scalable server-side applications with streamlined
                        routing and middleware integration.
                      </p>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
            <Education></Education>
          </div>
        </div>
      </div>
    </div>
  );
}
