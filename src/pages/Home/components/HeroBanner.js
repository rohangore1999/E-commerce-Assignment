import React from "react";

// Styles
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Configs
import { BANNER_CONFIG, BANNER_CONFIG_MOBILE } from "../../../configs";

// Hooks
import useScreenSize from "../../../hooks/useScreenSize";

// Components
import Banner from "./Banner";

const HeroBanner = () => {
  const { width } = useScreenSize();

  return (
    <section className="flex justify-center relative mt-6 pb-4 md:pb-16 cursor-pointer">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="w-[90%] md:w-full"
      >
        {width > "768"
          ? BANNER_CONFIG.map((banner, bannerIdx) => (
              <div>
                <Banner
                  key={bannerIdx}
                  img={banner.img}
                  caption={banner.caption}
                />
              </div>
            ))
          : BANNER_CONFIG_MOBILE.map((banner, bannerIdx) => (
              <div>
                <Banner
                  key={bannerIdx}
                  img={banner.img}
                  caption={banner.caption}
                />
              </div>
            ))}
      </Carousel>
    </section>
  );
};

export default HeroBanner;
