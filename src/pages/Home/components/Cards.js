import React from "react";

const Cards = ({ img, title }) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out bg-[#e5fffe] p-3 rounded-3xl">
      <div className="relative h-50 w-60">
        <img
          alt=""
          className="rounded-xl"
          src={img}
          layout="fill"
          objectFit="contain"
          width={500}
        />
      </div>

      <h3 className="text-lg text-center mt-3">{title}</h3>
    </div>
  );
};

export default Cards;
