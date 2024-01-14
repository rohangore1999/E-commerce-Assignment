import { FilterIcon, SearchIcon, UserIcon } from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

const BottomNavbar = () => {
  return (
    <div className="z-50 md:hidden flex justify-evenly items-center py-5 fixed bottom-0 left-0 w-full bg-white text-black shadow-lg border-t-2 border">
      <div className="space-y-2 flex flex-col items-center">
        <HomeIcon className="bottom-menu-icon text-yellow-500" />

        <p className="text-xs font-semibold">Home</p>
      </div>

      <div className="space-y-2 flex flex-col items-center">
        <FilterIcon className="bottom-menu-icon text-center" />

        <p className="text-xs font-thin">Categories</p>
      </div>

      <div className="space-y-2 flex flex-col items-center">
        <SearchIcon className="bottom-menu-icon" />

        <p className="text-xs font-thin">Explore</p>
      </div>

      <div className="space-y-2 flex flex-col items-center">
        <UserIcon className="bottom-menu-icon" />

        <p className="text-xs font-thin">Profile</p>
      </div>
    </div>
  );
};

export default BottomNavbar;
