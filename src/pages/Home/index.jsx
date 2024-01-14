import React, { useEffect, useState } from "react";

// Components
import Divider from "../../components/Divider";
import { Footer } from "./components/Footer";
import Headers from "./components/Headers";
import MainSection from "./components/MainSection";
import OfferSection from "./components/OfferSection";
import BottomNavbar from "../../components/BottomNavbar";

// Constants
import { SCROLL_THRESHOLD } from "./constants";

const Home = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setShowNavbar(scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <OfferSection />

      <Headers />

      <div className="hidden md:block">
        <Divider />
      </div>

      <div className="mx-auto max-w-screen-2xl mb-32">
        <MainSection />
      </div>

      <Footer />

      {showNavbar && <BottomNavbar />}
    </div>
  );
};

export default Home;
