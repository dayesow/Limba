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
  const images = [
    "KMSKA/KMSKA_2.jpeg",
    "BOEKOWSKI/Boekowski_1.jpeg",
    "LIMBATSHIRT/LIMBATSHIRT_1.jpeg",
    "ROMA/ROMA_20.jpeg",
    "KMSKA/KMSKA_11.jpeg",
    "BOEKOWSKI/Boekowski_4.jpeg",
    "silversquare1.jpg",
    "LIMBATSHIRT/LIMBATSHIRT_4.jpeg",
    "ROMA/ROMA_21.jpeg",
    "BOEKOWSKI/Boekowski_13.jpeg",
    "KMSKA/KMSKA_14.jpeg",
    "BOEKOWSKI/Boekowski_4.jpeg",
    "LIMBATSHIRT/LIMBATSHIRT_13.jpeg",
    "ROMA/ROMA_23.jpeg",
    "BOEKOWSKI/Boekowski_12.jpeg",
  ];
  return (
    <>
      <div style={{ overflow: "hidden" }}>
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
          <Gallery images={images} />
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
