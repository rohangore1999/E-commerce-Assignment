import React from "react";

const GridCard = ({ row, col, img, caption }) => (
  <div className={`relative w-full ${row > 1 ? `row-span-${row}` : ""}`}>
    <img src={img} alt={caption} className="rounded-3xl w-full h-full" />

    <div className="absolute bg-white w-9/12 bottom-0 left-[12%] text-center p-5 rounded-t-3xl">
      <p className="text-center text-xl font-medium tracking-widest">
        {caption}
      </p>
    </div>
  </div>
);

export default GridCard;
