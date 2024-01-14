// Components
import Cards from "./Cards";

// Configs
import { FEATURE_BRAND_CONFIG } from "../../../configs";

const FeatureCards = () => {
  return (
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
  );
};

export default FeatureCards;
