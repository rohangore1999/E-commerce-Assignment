// Constants
import {
  BANNER_TOO_HOT_TO_MISS_1,
  BANNER_TOO_HOT_TO_MISS_2,
} from "../constants";

// Images
import design_of_week from "../../../images/banner/design_of_week.jpg";

// Components
import HeroBanner from "./HeroBanner";
import MenuCards from "./MenuCards";
import Cards from "./Cards";
import Banner from "./Banner";
import GridCards from "./GridCards";
import SectionTitle from "../../../components/SectionTitle";

// Configs
import {
  CATEGORIES_TO_BAGS_CONFIG,
  FEATURE_BRAND_CONFIG,
  MENU_CONFIG,
} from "../../../configs";

const MainSection = () => {
  return (
    <>
      {/* Small Cards */}
      <div className="flex md:justify-center px-2 space-x-4 overflow-scroll scrollbar-hide no-scrollbar md:ml-0">
        {MENU_CONFIG.map((menu, menuIdx) => (
          <MenuCards key={menuIdx} img={menu.img} caption={menu.text} />
        ))}
      </div>

      {/* hero section */}
      <HeroBanner />

      {/* Medium Cards */}
      <div className="md:hidden">
        <SectionTitle title="What's New" align="left" />
      </div>

      <div className="flex overflow-scroll scrollbar-hide no-scrollbar space-x-3 p-3 px-5 md:px-0 md:-ml-1">
        {FEATURE_BRAND_CONFIG.map((feature, id) => (
          <Cards
            key={id}
            img={feature.img}
            title={feature.title}
            background
            hover
          />
        ))}
      </div>

      {/* Banner */}
      <div className="section-container">
        <SectionTitle title="Design of the Week" />

        <Banner img={design_of_week} button />
      </div>

      {/* Grid Banner */}
      <div className="section-container">
        <SectionTitle
          title="Trending Categories 🔥"
          description="Stay ahead of fashion game with these hot trends to try!"
        />

        <GridCards />
      </div>

      {/* Too Hot Section */}
      <>
        <SectionTitle title="Too hot to be missed" />

        <div className="flex gap-5 mt-5 mb-16">
          <Banner img={BANNER_TOO_HOT_TO_MISS_1} />
          <Banner img={BANNER_TOO_HOT_TO_MISS_2} />
        </div>
      </>

      {/* Categories to Bag */}
      <>
        <SectionTitle title="Categories to bag" />

        <div className="flex justify-center flex-wrap -ml-3">
          {CATEGORIES_TO_BAGS_CONFIG.map((feature, id) => (
            <Cards key={id} img={feature.img} title={feature.title} />
          ))}
        </div>
      </>
    </>
  );
};

export default MainSection;
