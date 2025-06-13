import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <div
      className="hero min-h-130 rounded-xl overflow-hidden"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR5Y18gTe-1m2gFmm_k6OclmD2wl8j2KAbMWUYAp5KLmc2KgjtY)",
      }}
    >
      <div className="hero-overlay "></div>
      <div className="w-full h-full flex items-end px-10 text-white">
        <div className="mb-10">
          <h1 className="text-5xl font-black mb-7">
            Find your next remote job
          </h1>
          <div className="flex items-center border p-1 bg-white rounded-lg md:w-120">
            <CiSearch className="text-2xl mx-2 text-neutral" />
            <input
              type="text"
              placeholder="Search"
              className="text-neutral-500 outline-0 flex-1"
            />
            <button className="btn bg-secondaryColor text-white border-primaryColor">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
