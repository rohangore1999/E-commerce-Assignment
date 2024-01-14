// Components
import Cards from "./Cards";

// Configs
import { CATEGORIES_TO_BAGS_CONFIG } from "../../../configs";

const SectionBagCategories = () => {
  return (
    <div className="cursor-pointer flex overflow-scroll scrollbar-hide no-scrollbar md:flex md:justify-center md:flex-wrap md:-ml-3">
      {CATEGORIES_TO_BAGS_CONFIG.map((feature, id) => (
        <Cards key={id} img={feature.img} title={feature.title} hover />
      ))}
    </div>
  );
};

export default SectionBagCategories;
