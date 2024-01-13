import React from "react";

const GridCard = ({ row }) => (
  <div class={`relative w-full row-span-${row}`}>
    <img
      src="https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="image1"
      className="rounded-3xl "
    />

    <div className="absolute bg-white w-9/12 bottom-0 left-[12%] text-center p-5 rounded-t-3xl">
      <p className="text-center text-xl font-medium tracking-widest">
        Color Splash
      </p>
    </div>
  </div>
);

export default GridCard;
