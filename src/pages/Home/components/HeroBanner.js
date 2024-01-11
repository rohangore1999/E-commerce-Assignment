import React from "react";

const HeroBanner = () => {
  return (
    <section className="flex justify-center relative py-16 cursor-pointer">
      <div className="h-5 min-w-[300px]">
        <img
          alt="hero_image"
          className="rounded-3xl"
          src="https://images.pexels.com/photos/3965543/pexels-photo-3965543.jpeg?auto=compress&cs=tinysrgb&w=2260&h=650&dpr=1"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64">{"title"}</h3>
        <p>{"description"}</p>
      </div>
    </section>
  );
};

export default HeroBanner;
