import {
  SearchIcon,
  ShoppingBagIcon,
  CashIcon,
  TruckIcon,
} from "@heroicons/react/outline";

// Components
import Divider from "../../../components/Divider";

export const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-4 lg:gap-[10rem]">
            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                About Bewakoof
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Who we are?
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    We are hiring
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Terms and Conditions
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Privacy Policy
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                Customer Service
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Contact us
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Track Order
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Return Order
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Cancel Order
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <p className="font-medium text-gray-900 dark:text-white">
                Quick Links
              </p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Offers
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Sitemap
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Brand stores
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col flex-1 gap-4">
            <div>
              <p className="text-white">Get Updates on your inbox</p>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                className="w-full p-2 border border-grey-light round text-grey-dark text-sm h-auto"
                placeholder="Your email address"
              />

              <button className="bg-yellow-500 text-black rounded-sm h-auto text-xs p-3">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <Divider styles="border-gray-600 my-10" />

        <div className="flex justify-between">
          <div className="space-y-5">
            <img
              alt="company_logo"
              src="https://images.bewakoof.com/web/ic-desktop-bwkf-trademark-logo.svg"
              className="bg-white p-2"
            />

            <div className="mt-4 flex gap-5">
              <div className="flex items-center gap-2">
                <TruckIcon className="h-5 w-5 text-white" />{" "}
                <span className="text-white text-xs">
                  15 Days Return Policy*
                </span>
              </div>

              <span className="text-white pb-1"> | </span>

              <div className="flex items-center gap-2">
                <CashIcon className="h-5 w-5 text-white " />
                <span className="text-white text-xs">Cash On Delivery*</span>
              </div>
            </div>

            <p className="text-xs text-white mt-5">
              &copy; 2023 Bewakoof Private Limited. All Rights Reserved.
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex items-center space-x-5">
              <p className="text-white text-sm font-bold text-left">
                100% Secure Payment
              </p>

              <span className="flex space-x-5 bg-white p-2">
                <img
                  width={50}
                  src="https://cdna.iconscout.com/img/visa.4759160.svg"
                />

                <img
                  width={50}
                  src="https://cdna.iconscout.com/img/upi.6114ac6.svg"
                />
                <img
                  width={50}
                  src="https://cdna.iconscout.com/img/razorpay.6e46f6f.svg"
                />
                <img
                  width={50}
                  src="https://cdna.iconscout.com/img/apple-pay.253013b.svg"
                />
                <img
                  width={50}
                  src="https://cdna.iconscout.com/img/google-pay.50c14aa.svg"
                />
                <img
                  width={50}
                  src="https://cdna.iconscout.com/img/paypal-logo.17b6873.svg"
                />
              </span>
            </div>

            <div className="flex items-center space-x-5">
              <p className="text-white text-sm font-bold text-left">
                Download The App
              </p>

              <div className="pl-7">
                <img
                  width={100}
                  src="https://iconape.com/wp-content/png_logo_vector/app-store-google-play-logo.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
