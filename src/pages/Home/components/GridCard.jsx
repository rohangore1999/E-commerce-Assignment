import React from "react";

const GridCard = ({ row, img, caption, isMobile }) => (
  <div className={`${row > 1 ? "row-span-2" : ""} relative w-full`}>
    <img src={img} alt={caption} className="rounded-3xl w-full h-full" />

    <div
      className={`absolute bg-white w-9/12 bottom-0 left-[12%] text-center ${
        isMobile ? "p-2" : "p-5"
      } rounded-t-3xl`}
    >
      <p
        className={
          isMobile
            ? "text-center text-xs font-semibold"
            : "text-center text-xl font-medium tracking-widest"
        }
      >
        {caption}
      </p>
    </div>
  </div>
);

export default GridCard;
