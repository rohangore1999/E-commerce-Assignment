import React from "react";

const Banner = ({ img, caption, button }) => (
  <div className="relative">
    <img alt="hero_image" className="rounded-3xl " src={img} />

    {caption && (
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{caption}</h3>
      </div>
    )}

    {button && (
      <button className=" absolute bottom-10 left-1/2 text-2xl text-black bg-white shadow-2xl hover:shadow-xl px-4 py-2 rounded-xl mt-5 font-semibold border-none active:scale-90 transition duration-150 hover:scale-105 ">
        Shop Now
      </button>
    )}
  </div>
);

export default Banner;
