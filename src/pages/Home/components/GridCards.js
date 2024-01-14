import React from "react";

// Configs
import { GRID_CARD_CONFIG, GRID_CARD_CONFIG_MOBILE } from "../../../configs";

// Hooks
import useScreenSize from "../../../hooks/useScreenSize";

// Components
import GridCard from "./GridCard";

const GridCards = () => {
  const { width } = useScreenSize();

  return (
    <div className="grid grid-cols-2 gap-3 p-10 h-[600px] md:h-full md:grid-cols-3 grid-rows-3 md:p-20 pt-0 space-y-2 md:space-y-0 md:grid md:gap-3 md:grid-rows-3">
      {width > "765"
        ? GRID_CARD_CONFIG.map(
            ({ row, img, caption }) =>
              row && (
                <div
                  className={`${row > 1 ? "row-span-2" : ""} relative w-full`}
                >
                  <img
                    src={img}
                    alt={caption}
                    className="rounded-3xl w-full h-full"
                  />

                  <div className="absolute bg-white w-9/12 bottom-0 left-[12%] text-center p-5 rounded-t-3xl">
                    <p className="text-center text-xl font-medium tracking-widest">
                      {caption}
                    </p>
                  </div>
                </div>
              )
          )
        : GRID_CARD_CONFIG_MOBILE.map(
            ({ row, img, caption }) =>
              row && (
                <div
                  className={`${row > 1 ? "row-span-2" : ""} relative w-full`}
                >
                  <img
                    src={img}
                    alt={caption}
                    className="rounded-3xl w-full h-full"
                  />

                  <div className="absolute bg-white w-9/12 bottom-0 left-[12%] text-center p-2 rounded-t-3xl">
                    <p className="text-center text-xs font-semibold">
                      {caption}
                    </p>
                  </div>
                </div>
              )
          )}
    </div>
  );
};

export default GridCards;
