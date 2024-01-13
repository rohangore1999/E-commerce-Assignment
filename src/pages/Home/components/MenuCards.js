import React from "react";

const MenuCards = ({ img, caption }) => {
  return (
    <div className="flex flex-col justify-center cursor-pointer mt-2 hover:scale-105 transform transition duration-300 ease-out">
      <img alt="menu-icons" src={img} className="rounded-lg w-80" />

      <div className="flex justify-center mt-2">
        <p className="text-sm font-semibold">{caption}</p>
      </div>
    </div>
  );
};

export default MenuCards;
