// Images
import design_of_week from "../../../images/banner/design_of_week.jpg";

// Components
import HeroBanner from "./HeroBanner";
import Banner from "./Banner";
import GridCards from "./GridCards";
import SectionTitle from "../../../components/SectionTitle";
import SectionFOMO from "./SectionFOMO";
import SectionBagCategories from "./SectionBagCategories";
import SectionMenuCards from "./SectionMenuCards";
import FeatureCards from "./FeatureCards";

const MainSection = () => {
  return (
    <>
      {/* Small Cards */}
      <SectionMenuCards />

      {/* Hero section */}
      <HeroBanner />

      {/* Features Cards - What's New - Mobile */}
      <>
        <div className="md:hidden mt-10 md:mt-0">
          <SectionTitle title="What's New" align="left" />
        </div>

        <FeatureCards />
      </>

      {/* Banner - Design of the week */}
      <div className="section-container">
        <SectionTitle title="Design of the Week" />

        <Banner img={design_of_week} button />
      </div>

      {/* Grid Banner - Trending Categories */}
      <div className="section-container mb-5">
        <SectionTitle
          title="Trending Categories 🔥"
          description="Stay ahead of fashion game with these hot trends to try!"
        />

        <GridCards />
      </div>

      {/* Too Hot to Section */}
      <div className="section-container">
        <SectionTitle title="Too hot to be missed" />

        <SectionFOMO />
      </div>

      {/* Categories to Bag */}
      <div className="section-container mt-2 -space-y-px">
        <SectionTitle title="Categories to bag" />

        <SectionBagCategories />
      </div>

      {/* Best of BEWAKOOF - MOBILE */}
      <div className="md:hidden mt-10">
        <SectionTitle title="Best of Bewakoof" />

        <HeroBanner />
      </div>

      {/* Top Accessories */}
      <div className="md:hidden section-container space-y-5 md:-space-y-px">
        <SectionTitle title="Top Accessories" />

        <SectionBagCategories />
      </div>
    </>
  );
};

export default MainSection;
