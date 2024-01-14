// Components
import Cards from "./Cards";

// Configs
import { CATEGORIES_TO_BAGS_CONFIG } from "../../../configs";

const SectionBagCategories = () => {
  return (
    <div>
      <div className="snap-x cursor-pointer flex overflow-scroll overflow-y-hidden scrollbar-hide no-scrollbar md:flex md:justify-center md:flex-wrap md:-ml-3">
        {CATEGORIES_TO_BAGS_CONFIG.map((feature, id) => (
          <Cards key={id} img={feature.img} title={feature.title} hover />
        ))}
      </div>

      <div className="snap-x md:hidden cursor-pointer flex overflow-scroll overflow-y-hidden scrollbar-hide no-scrollbar md:justify-center md:flex-wrap md:-ml-3">
        {CATEGORIES_TO_BAGS_CONFIG.map((feature, id) => (
          <Cards key={id} img={feature.img} title={feature.title} hover />
        ))}
      </div>
    </div>
  );
};

export default SectionBagCategories;
