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

      {/* hero section */}
      <HeroBanner />

      {/* Medium Cards */}
      <div className="md:hidden">
        <SectionTitle title="What's New" align="left" />
      </div>

      <FeatureCards />

      {/* Banner */}
      <div className="section-container">
        <SectionTitle title="Design of the Week" />

        <Banner img={design_of_week} button />
      </div>

      {/* Grid Banner */}
      <div className="section-container mb-5">
        <SectionTitle
          title="Trending Categories 🔥"
          description="Stay ahead of fashion game with these hot trends to try!"
        />

        <GridCards />
      </div>

      {/* Too Hot to Section */}
      <div className="mb-14">
        <SectionTitle title="Too hot to be missed" />

        <SectionFOMO />
      </div>

      {/* Categories to Bag */}
      <>
        <SectionTitle title="Categories to bag" />

        <SectionBagCategories />
      </>
    </>
  );
};

export default MainSection;
