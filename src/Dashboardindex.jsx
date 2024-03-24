// HeroSection.jsx
import React from "react";
import tree9 from "./assets/tree9.jpeg";

const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${tree9})` }}
      className="relative bg-cover bg-no-repeat flex justify-center items-center h-screen"
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Plant Trees, Grow Futures
        </h1>
        <p className="text-lg text-white mb-8">
          Your journey to a greener world starts here.
        </p>
        <button className="px-6 py-3 bg-white text-green-500 font-semibold rounded-full hover:bg-green-100 hover:text-green-600 transition duration-300">
          Start Planting
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
