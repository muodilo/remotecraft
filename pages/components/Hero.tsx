import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div
      className="hero min-h-130 rounded-xl overflow-hidden"
      style={{
        backgroundImage: "url('/office1.jpg')",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="w-full h-full flex items-end lg:px-10 px-5 text-white">
        <div className="mb-10">
          <h1 className="text-5xl font-black mb-7">
            Find your next remote job
          </h1>
          <form
            className="flex items-center border p-1 bg-white rounded-lg md:w-120"
            role="search"
            aria-label="Search"
          >
            <CiSearch className="text-2xl mx-2 text-neutral" />
            <input
              type="search"
              placeholder="Search"
              className="text-neutral-500 outline-0 flex-1"
              aria-label="Search query"
              name="search"
            />
            <button
              type="submit"
              className="btn bg-secondaryColor text-white border-primaryColor"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
