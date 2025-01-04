import React from "react";
import DU from "../assets/512px-Dhaka_University_logo.svg.jpg";

export default function Education() {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-primary from-0 to-15% to-secondary text-transparent bg-clip-text mb-6">
        Education
      </h2>
      <div className="border-4 border-primary rounded-lg overflow-hidden shadow-md">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="p-8 w-full md:w-1/4 flex justify-center items-center bg-base-200">
            <img
              src={DU}
              className="w-32 h-32 md:w-48 md:h-48 rounded-lg shadow-lg"
              alt="University of Dhaka Logo"
            />
          </div>
          <div className="p-8 w-full lg:w-3/4 bg-white">
            <h2 className="font-bold text-3xl text-primary mb-4">
              University of Dhaka
            </h2>
            <p className="text-lg mb-2">Undergraduate Student</p>
            <p className="text-md text-gray-600 mb-2">
              Department:{" "}
              <span className="font-medium">
                Accounting & Information Systems (AIS)
              </span>
            </p>
            <p className="text-md text-gray-600 mb-2">
              Session: <span className="font-medium">2023-2024</span>
            </p>
            <p className="text-md text-gray-600 mb-4">
              Graduation: <span className="font-medium">Expected in 2028</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
