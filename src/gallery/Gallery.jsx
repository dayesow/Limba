import { useState, useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";
import "./gallery.scss";
import Footer from "../footer/Footer";

const tabs = [
  {
    id: 1,
    title: "KMSKA",
    images: [
      "KMSKA/KMSKA_1.jpeg",
      "KMSKA/KMSKA_2.jpeg",
      "KMSKA/KMSKA_3.jpeg",
      "KMSKA/KMSKA_4.jpeg",
      "KMSKA/KMSKA_5.jpeg",
      "KMSKA/KMSKA_6.jpeg",
      "KMSKA/KMSKA_7.jpeg",
      "KMSKA/KMSKA_8.jpeg",
      "KMSKA/KMSKA_9.jpeg",
      "KMSKA/KMSKA_10.jpeg",
      "KMSKA/KMSKA_11.jpeg",
      "KMSKA/KMSKA_12.jpeg",
      "KMSKA/KMSKA_13.jpeg",
      "KMSKA/KMSKA_14.jpeg",
      "KMSKA/KMSKA_15.jpeg",
    ],
  },
  {
    id: 2,
    title: "Ndaku na Ngai",
    images: [
      "LIMBATSHIRT/LIMBATSHIRT_1.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_2.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_3.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_4.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_5.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_6.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_7.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_8.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_9.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_10.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_11.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_12.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_13.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_14.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_15.jpeg",
      "LIMBATSHIRT/LIMBATSHIRT_16.jpeg",
    ],
  },
  {
    id: 3,
    title: "Roma",
    images: [
      "ROMA/ROMA_1.jpeg",
      "ROMA/ROMA_2.jpeg",
      "ROMA/ROMA_3.jpeg",
      "ROMA/ROMA_4.jpeg",
      "ROMA/ROMA_5.jpeg",
      "ROMA/ROMA_6.jpeg",
      "ROMA/ROMA_7.jpeg",
      "ROMA/ROMA_8.jpeg",
      "ROMA/ROMA_9.jpeg",
      "ROMA/ROMA_10.jpeg",
      "ROMA/ROMA_11.jpeg",
      "ROMA/ROMA_12.jpeg",
      "ROMA/ROMA_13.jpeg",
      "ROMA/ROMA_14.jpeg",
      "ROMA/ROMA_15.jpeg",
      "ROMA/ROMA_16.jpeg",
      "ROMA/ROMA_17.jpeg",
      "ROMA/ROMA_18.jpeg",
      "ROMA/ROMA_19.jpeg",
      "ROMA/ROMA_20.jpeg",
      "ROMA/ROMA_21.jpeg",
      "ROMA/ROMA_22.jpeg",
      "ROMA/ROMA_23.jpeg",
    ],
  },
  {
    id: 4,
    title: "Café Boekowski",
    images: [
      "BOEKOWSKI/Boekowski_1.jpeg",
      "BOEKOWSKI/Boekowski_2.jpeg",
      "BOEKOWSKI/Boekowski_3.jpeg",
      "BOEKOWSKI/Boekowski_4.jpeg",
      "BOEKOWSKI/Boekowski_5.jpeg",
      "BOEKOWSKI/Boekowski_6.jpeg",
      "BOEKOWSKI/Boekowski_7.jpeg",
      "BOEKOWSKI/Boekowski_8.jpeg",
      "BOEKOWSKI/Boekowski_9.jpeg",
      "BOEKOWSKI/Boekowski_10.jpeg",
      "BOEKOWSKI/Boekowski_11.jpeg",
      "BOEKOWSKI/Boekowski_12.jpeg",
      "BOEKOWSKI/Boekowski_13.jpeg",
      "BOEKOWSKI/Boekowski_14.jpeg",
      "BOEKOWSKI/Boekowski_15.jpeg",
      "BOEKOWSKI/Boekowski_16.jpeg",
      "BOEKOWSKI/Boekowski_17.jpeg",
      "BOEKOWSKI/Boekowski_18.jpeg",
      "BOEKOWSKI/Boekowski_19.jpeg",
      "BOEKOWSKI/Boekowski_20.jpeg",
      "BOEKOWSKI/Boekowski_21.jpeg",
    ],
  },
  {
    id: 5,
    title: "Limbaverse",
    images: [
      // "LIMBAVERSE/LIMBAVERSE_4.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_5.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_3.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_1.png",
      // "LIMBAVERSE/LIMBAVERSE_2.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_6.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_7.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_8.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_9.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_11.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_12.jpeg",
      // "LIMBAVERSE/LIMBAVERSE_13.jpeg",
      "LIMBAVERSE/LIMBAVERSE_14.jpeg",
      "LIMBAVERSE/LIMBAVERSE_15.jpeg",
      "LIMBAVERSE/LIMBAVERSE_16.jpeg",
    ],
  },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [fade, setFade] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleTabClick = (tabId) => {
    if (tabId === activeTab) return; // Prevent clicking on the active tab
    setFade(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setFade(false);
    }, 300); // Match the duration of the fade-out animation
  };

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  useEffect(() => {
    const ourText = new SplitType("h3.our-text", { types: "chars" });
    const chars = ourText.chars;

    gsap.fromTo(
      chars,
      {
        y: "100%",
        opacity: 1,
      },
      {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        duration: 2,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <>
      <div
        id="#gallery-container-2"
        className="gallery-container"
        style={{ minHeight: "100vh", overflow: "auto" }}
      >
        <div className="gallery-header">
          <h3 className="our-text">Galerij</h3>
        </div>
        <div className="tabs">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab ${
                activeTab === tab.id ? "active" : ""
              } hover-underline-animation`}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.title}
            </div>
          ))}
        </div>
        <div className={`images-grid ${fade ? "fade" : ""}`}>
          {tabs
            .find((tab) => tab.id === activeTab)
            .images.map((image, index) => (
              <img
                key={index}
                src={`/assets/${image}`}
                alt={`Gallery ${activeTab}`}
                loading="lazy"
                onClick={() => openModal(image)}
              />
            ))}
        </div>
      </div>
      <Footer />
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={`/assets/${modalImage}`} alt="Modal" />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
