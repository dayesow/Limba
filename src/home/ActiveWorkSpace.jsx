import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./activeworkspace.scss";
import SplitType from "split-type";
import { useWindowSize } from "./FeaturedWork";

const images = [
  "/assets/BOEKOWSKI/Boekowski_10.jpeg",
  "/assets/lezenisgoud.jpeg",
  "/assets/lezenisgoud2.jpeg",
  "/assets/limbadrawing.jpeg",
  "/assets/photo-119.jpg",
  "/assets/KMSKA/KMSKA_5.jpeg",
];

const ActiveWorkSpace = () => {
  const imageContainerRef = useRef(null);
  let imageIndex = 0;
  const isMobile = useWindowSize();
  useEffect(() => {
    const startValue = window.innerWidth <= 768 ? "top 100%" : "top 80%";
    const endValue = window.innerWidth <= 768 ? "top 30%" : "top 30%";

    const slideImages = () => {
      const currentImage = imageContainerRef.current.children[imageIndex];
      const nextImage =
        imageContainerRef.current.children[(imageIndex + 1) % images.length];

      gsap.fromTo(
        nextImage,
        { y: "-100%", opacity: 1 },
        { y: "0%", opacity: 1, duration: 3, ease: "power2.inOut" }
      );

      gsap.fromTo(
        currentImage,
        { y: "0%", opacity: 1 },
        { y: "100%", opacity: 1, duration: 3, ease: "power2.inOut" }
      );

      imageIndex = (imageIndex + 1) % images.length;
    };

    const ourText = new SplitType("h3.active-work-title", { types: "chars" });
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
        scrollTrigger: {
          trigger: "h3.active-work-title",
          start: startValue, // Start animation when the top of the element hits 80% of the viewport height
          end: endValue, // End animation when the top of the element hits 30% of the viewport height
          toggleActions: "play none none none",
        },
      }
    );
    const interval = setInterval(slideImages, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="active-work-space" style={{ minHeight: "100vh" }}>
      <div className="title">
        <h3 className="active-work-title">
          Mijn {isMobile && <br></br>}werkruimtes
        </h3>
      </div>
      <div className="areas-of-focus">
        <div className="focus-section">
          <div className="images" ref={imageContainerRef}>
            {images.map((src, index) => (
              <img key={index} src={src} alt={`focus-${index}`} />
            ))}
          </div>
        </div>
        <div className="focus-list">
          <ul>
            <li>Bibliotheken</li>
            <li>Scholen</li>
            <li>Onderwijsinstellingen</li>
            <li>Cultuurhuizen</li>
            <li>Gemeenschapscentra</li>
            <li>Verenigingen</li>
            <li>Boekhandels</li>
          </ul>
          <div className="hover-underline-container">
            <a
              href="mailto:limba.wml@gmail.com"
              className="hover-underline-animation"
            >
              Contacteer mij nu
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveWorkSpace;
