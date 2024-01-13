// Constants
import { MENU_CONFIG, FEATURE_BRAND_CONFIG } from "../constants";

// Images
import design_of_week from "../../../images/banner/design_of_week.jpg";

// Components
import HeroBanner from "./HeroBanner";
import MenuCards from "./MenuCards";
import Cards from "./Cards";
import Banner from "./Banner";
import GridCards from "./GridCards";

const MainSection = () => {
  return (
    <>
      {/* Small Cards */}
      <div className="flex justify-center space-x-4">
        {MENU_CONFIG.map((menu) => (
          <MenuCards img={menu.img} caption={menu.text} />
        ))}
      </div>

      {/* hero section */}
      <HeroBanner />

      {/* Medium Cards */}
      <div className="flex overflow-scroll scrollbar-hide no-scrollbar space-x-3 p-3 -ml-3">
        {FEATURE_BRAND_CONFIG.map((feature) => (
          <Cards img={feature.img} title={feature.title} />
        ))}
      </div>

      {/* Banner */}
      <div className="flex flex-col justify-center pt-20 space-y-10">
        <p className="text-center uppercase text-3xl font-medium">
          Design of the Week
        </p>

        <Banner img={design_of_week} button />
      </div>

      {/* Grid Banner */}
      <div className="flex flex-col justify-center pt-20 space-y-10">
        <div>
          <p className="text-center uppercase text-3xl font-medium mb-2">
            Trending Categories 🔥
          </p>

          <p className="text-center text-2xl font-thin">
            Stay ahead of fashion game with these hot trends to try!
          </p>
        </div>

        <GridCards />
      </div>
    </>
  );
};

export default MainSection;
