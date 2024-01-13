import React from "react";

// Styles
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Configs
import { BANNER_CONFIG } from "../../../configs";

// Components
import Banner from "./Banner";

const HeroBanner = () => {
  return (
    <section className="flex justify-center relative py-16 cursor-pointer ">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="w-[90%]"
      >
        {BANNER_CONFIG.map((banner, bannerIdx) => (
          <Banner key={bannerIdx} img={banner.img} caption={banner.caption} />
        ))}
      </Carousel>
    </section>
  );
};

export default HeroBanner;
