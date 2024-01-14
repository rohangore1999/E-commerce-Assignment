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
    <div className="grid grid-cols-2 gap-3 p-10 pb-0 h-[600px] md:h-full md:grid-cols-3 grid-rows-3 md:p-0 pt-0 space-y-2 md:space-y-0 md:grid md:gap-10 md:grid-rows-3">
      {width > "765"
        ? GRID_CARD_CONFIG.map(({ row, img, caption }) => (
            <GridCard row={row} img={img} caption={caption} />
          ))
        : GRID_CARD_CONFIG_MOBILE.map(({ row, img, caption }) => (
            <GridCard row={row} img={img} caption={caption} isMobile />
          ))}
    </div>
  );
};

export default GridCards;
