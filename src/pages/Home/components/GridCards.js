import React from "react";

// Constants
import { GRID_CARD_CONFIG } from "../constants";

// Components
import GridCard from "./GridCard";

const GridCards = () => (
  <div className="grid-cols-3 p-20 pt-0 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
    {GRID_CARD_CONFIG.map((card) => (
      <GridCard
        key={card.id}
        row={card.row}
        img={card.img}
        caption={card.caption}
      />
    ))}
  </div>
);

export default GridCards;
