// Components
import Divider from "../../components/Divider";
import { Footer } from "./components/Footer";
import Headers from "./components/Headers";
import MainSection from "./components/MainSection";
import OfferSection from "./components/OfferSection";

const Home = () => {
  return (
    <div>
      <OfferSection />

      <Headers />

      <Divider />

      <div className="mx-auto max-w-screen-2xl mb-32">
        <MainSection />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
