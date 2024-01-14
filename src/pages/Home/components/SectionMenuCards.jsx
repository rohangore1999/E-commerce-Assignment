// Components
import MenuCards from "./MenuCards";

// Configs
import { MENU_CONFIG } from "../../../configs";

const SectionMenuCards = () => {
  return (
    <div className="flex mt-2 md:justify-center px-2 space-x-4 overflow-scroll scrollbar-hide no-scrollbar md:ml-0">
      {MENU_CONFIG.map((menu, menuIdx) => (
        <MenuCards key={menuIdx} img={menu.img} caption={menu.text} />
      ))}
    </div>
  );
};

export default SectionMenuCards;
