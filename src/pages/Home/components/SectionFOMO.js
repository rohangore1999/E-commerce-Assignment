import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// Components
import Banner from "./Banner";

// Constants
import {
  BANNER_TOO_HOT_TO_MISS_1,
  BANNER_TOO_HOT_TO_MISS_2,
} from "../constants";

// Hooks
import useScreenSize from "../../../hooks/useScreenSize";

const SectionFOMO = () => {
  const { width } = useScreenSize();

  return (
    <div>
      {width < "768" ? (
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={5000}
          className="px-5 mt-5"
        >
          <Banner img={BANNER_TOO_HOT_TO_MISS_1} />
          <Banner img={BANNER_TOO_HOT_TO_MISS_2} />
        </Carousel>
      ) : (
        <div className="flex gap-5 mt-5 mb-16">
          <Banner img={BANNER_TOO_HOT_TO_MISS_1} />
          <Banner img={BANNER_TOO_HOT_TO_MISS_2} />
        </div>
      )}
    </div>
  );
};

export default SectionFOMO;
