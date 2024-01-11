// Constants
import { MENU_CONFIG } from "../constants";

// Components
import HeroBanner from "./HeroBanner";
import MenuCards from "./MenuCards";

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
    </>
  );
};

export default MainSection;
