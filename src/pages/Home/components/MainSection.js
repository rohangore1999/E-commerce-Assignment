// Constants
import { MENU_CONFIG, FEATURE_BRAND_CONFIG } from "../constants";

// Images
import design_of_week from "../../../images/banner/design_of_week.jpg";

// Components
import HeroBanner from "./HeroBanner";
import MenuCards from "./MenuCards";
import Cards from "./Cards";
import Banner from "./Banner";

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
      <div className="flex overflow-scroll scrollbar-hide space-x-3 p-3 -ml-3">
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
      <div class="container mx-auto">
        <div class="grid-cols-3 p-20 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3">
          {/* 1x1 && 2x1 : row-span-2 */}
          <div class="w-full row-span-2  rounded">
            <img
              src="https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image1"
            />
          </div>

          {/* 1x2 */}
          <div class="w-full rounded ">
            <img
              src="https://images.pexels.com/photos/1456737/pexels-photo-1456737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image1"
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* 1x3 && 2x3 */}
          <div class="w-full row-span-2  rounded">
            <img
              src="https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image1"
            />
          </div>

          {/* 2x2 && 3x2 */}
          <div class="w-full row-span-2  rounded">
            <img
              src="https://images.pexels.com/photos/7327268/pexels-photo-7327268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image1"
            />
          </div>

          {/* 3x1 */}
          <div class="w-full row-span-2 rounded">
            <img
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image1"
              style={{ width: "100%", height: "96%" }}
            />
          </div>

          {/* 3x3 */}
          <div class="w-full rounded">
            <img
              src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image1"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSection;
