import {
  SearchIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Headers = () => (
  <div className="flex items-center mx-10 pt-1 justify-between">
    {/* left container */}
    <div className="flex space-x-10">
      <img
        alt="company_logo"
        width={150}
        src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
      />

      <div className="link">Men</div>
      <div className="link">Women</div>
      <div className="link">Accessories</div>
    </div>

    {/* right container */}
    <div className="flex items-center space-x-10">
      <div className="relative p-3 rounded-md w-[30rem]">
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
        <UserIcon className="h-5 w-5" />
        <p className="link">Account</p>
      </div>

      <div className="with-icons">
        <HeartIcon className="h-5 w-5" />
        <p className="link">Wishlist</p>
      </div>

      <div className="with-icons">
        <ShoppingBagIcon className="h-5 w-5" />
        <p className="link">Cart</p>
      </div>
    </div>
  </div>
);

export default Headers;
