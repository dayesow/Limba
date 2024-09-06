import Footer from "../footer/Footer";

import Accordion from "./Accordion";
import ActiveWorkSpace from "./ActiveWorkSpace";

import FeaturedWork from "./FeaturedWork";
import Gallery from "./GalleryHome";
import Hero from "./Hero";

import "./home.scss";
import HomeVideo from "./HomeVideo";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Hero />
        <HomeVideo />

        <div style={{ position: "relative", zIndex: 5 }} id="services">
          <Services />
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <Accordion />
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <ActiveWorkSpace />
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <FeaturedWork />
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <Gallery />
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
