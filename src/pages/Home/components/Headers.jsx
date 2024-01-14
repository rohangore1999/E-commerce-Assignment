import React from "react";
import {
  SearchIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Headers = () => (
  <div className="flex items-center px-10 pt-1 justify-between pb-5 md:pb-0 border-b-2 md:border-b-0 bg-yellow-400 md:bg-white">
    {/* left container */}
    <div className="flex space-x-10">
      <div className="w-[150px] flex items-center justify-center">
        <div className="with-icons md:hidden">
          <MenuIcon className="pt-1 mr-5 cursor-pointer text-black icon-styles" />
        </div>

        <img
          alt="company_logo"
          width={150}
          src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
          className="object-contain"
        />
      </div>

      <div className="hidden md:block link">Men</div>
      <div className="hidden md:block link">Women</div>
      <div className="hidden md:block link">Accessories</div>
    </div>

    {/* right container */}
    <div className="flex items-center space-x-10">
      <div className="hidden md:block relative p-3 rounded-md w-[30rem]">
        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>

        <input
          className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-50 rounded-md focus:ring-black focus:border-black"
          type={"text"}
          placeholder="Search by Products"
        />
      </div>

      <div className="with-icons">
        <UserIcon className="icon-styles" />
        <p className="hidden md:block link">Account</p>
      </div>

      <div className="with-icons">
        <HeartIcon className="icon-styles" />
        <p className="hidden md:block link">Wishlist</p>
      </div>

      <div className="with-icons">
        <ShoppingBagIcon className="icon-styles" />
        <p className="hidden md:block link">Cart</p>
      </div>
    </div>
  </div>
);

export default Headers;
