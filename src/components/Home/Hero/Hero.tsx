"use client";
import React from "react";
import { Chivo } from "next/font/google";

const chivo = Chivo({ subsets: ["latin"], weight: ["400", "600", "700"] });

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/images/hero1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
        {/* Heading */}
        <h1
          className={`${chivo.className} text-white text-3xl md:text-5xl font-bold mb-4`}
        >
          Plan Your Perfect Trip
        </h1>
        <p className="text-white text-base md:text-lg mb-8">
          Discover unforgettable destinations and experiences.
        </p>

        {/* Form */}
        <form className="flex cursor-pointer flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm bg-white/80 backdrop-blur-sm rounded-lg px-6 py-4 shadow-md w-full sm:max-w-4xl mx-auto">
          {/* Destination */}
          <div className="flex items-center gap-2 w-full">
            <label className="text-black font-medium text-xs sm:text-sm w-20">Location:</label>
            <input
              type="text"
              placeholder="e.g. Delhi"
              className="bg-transparent text-black focus:outline-none placeholder:text-gray-500 w-full sm:w-36 p-2 rounded-md border border-gray-300"
            />
          </div>

          {/* Start Date */}
          <div className="flex items-center gap-2 w-full">
            <label className="text-black font-medium text-xs sm:text-sm w-16">From:</label>
            <input
              type="date"
              className="bg-transparent text-black focus:outline-none w-full sm:w-36 p-2 rounded-md border border-gray-300"
            />
          </div>

          {/* End Date */}
          <div className="flex items-center gap-2 w-full">
            <label className="text-black font-medium text-xs sm:text-sm w-12">To:</label>
            <input
              type="date"
              className="bg-transparent text-black focus:outline-none w-full sm:w-36 p-2 rounded-md border border-gray-300"
            />
          </div>

          {/* Guests */}
          <div className="flex items-center gap-2 w-full">
            <label className="text-black font-medium text-xs sm:text-sm w-20">Guests:</label>
            <input
              type="number"
              min={1}
              placeholder="1"
              className="w-16 bg-transparent text-black focus:outline-none placeholder:text-gray-500 p-2 rounded-md border border-gray-300"
            />
          </div>

          {/* Search Button */}
          <button
            type="submit"
            className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-700 transition mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
