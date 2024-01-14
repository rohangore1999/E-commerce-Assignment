import React from "react";

const MenuCards = ({ img, caption }) => {
  return (
    <div className="flex md:w-full flex-col justify-center cursor-pointer mt-2 hover:scale-105 transform transition duration-300 ease-out">
      <img alt="menu-icons" src={img} className="rounded-lg max-w-24 md:max-w-full" />

      <div className="flex justify-center mt-2">
        <p className="text-sm font-semibold">{caption}</p>
      </div>
    </div>
  );
};

export default MenuCards;
