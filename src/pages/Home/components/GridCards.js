// import React from "react";

// // Constants
// import { GRID_CARD_CONFIG } from "../constants";

// // Components
// import GridCard from "./GridCard";

// const GridCards = () => (
//   <div className="grid-cols-3 p-20 pt-0 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
//     {GRID_CARD_CONFIG.map((card) => (
//       <GridCard
//         key={card.id}
//         row={card.row}
//         img={card.img}
//         caption={card.caption}
//       />
//     ))}
//   </div>
// );

// export default GridCards;

import React from "react";

// Components
import GridCard from "./GridCard";

const GridCards = () => {
  return (
    <div class="grid-cols-3 p-20 pt-0 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
      {/* <GridCard row={2} /> */}

      {/* 1x1 && 2x1 : row-span-2 */}
      <div class="relative w-full row-span-2">
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

      {/* 1x2 */}
      <div class="relative w-full rounded ">
        <img
          src="https://images.pexels.com/photos/1456737/pexels-photo-1456737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image1"
          style={{ width: "100%", height: "100%" }}
          className="rounded-3xl"
        />

        <div className="absolute bg-white w-9/12 bottom-0 left-[12%] text-center p-5 rounded-t-3xl">
          <p className="text-center text-xl font-medium tracking-widest">
            Color Splash
          </p>
        </div>
      </div>

      {/* 1x3 && 2x3 */}
      <div class="relative w-full row-span-2 rounded">
        <img
          src="https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image1"
          className="rounded-3xl"
        />

        <div className="absolute bg-white w-9/12 bottom-0 left-[12%] text-center p-5 rounded-t-3xl">
          <p className="text-center text-xl font-medium tracking-widest">
            Color Splash
          </p>
        </div>
      </div>

      {/* 2x2 && 3x2 */}
      <div class="relative w-full row-span-2  rounded">
        <img
          src="https://images.pexels.com/photos/7327268/pexels-photo-7327268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image1"
          className="rounded-3xl"
        />

        <div className="absolute bg-white w-9/12 bottom-0 left-[12%] text-center p-5 rounded-t-3xl">
          <p className="text-center text-xl font-medium tracking-widest">
            Color Splash
          </p>
        </div>
      </div>

      {/* 3x1 */}
      <div class="relative w-full row-span-2 rounded">
        <img
          src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image1"
          style={{ width: "100%", height: "96%" }}
          className="rounded-3xl"
        />

        <div className="absolute bg-white w-9/12 bottom-0 left-[12%] text-center p-5 rounded-t-3xl">
          <p className="text-center text-xl font-medium tracking-widest">
            Color Splash
          </p>
        </div>
      </div>

      {/* 3x3 */}
      <div class="relative w-full rounded">
        <img
          src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="image1"
          style={{ width: "100%", height: "100%" }}
          className="rounded-3xl"
        />

        <div className="absolute bg-white w-9/12 bottom-0 left-[12%] text-center p-5 rounded-t-3xl">
          <p className="text-center text-xl font-medium tracking-widest">
            Color Splash
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCards;
