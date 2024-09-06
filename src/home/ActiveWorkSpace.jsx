import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./activeworkspace.scss";
import SplitType from "split-type";

const images = [
  "src/assets/BOEKOWSKI/Boekowski_10.jpeg",
  "src/assets/lezenisgoud.jpeg",
  "src/assets/lezenisgoud2.jpeg",
  "src/assets/limbadrawing.jpeg",
  "src/assets/photo-119.jpg",
  "src/assets/KMSKA/KMSKA_5.jpeg",
];

const ActiveWorkSpace = () => {
  const imageContainerRef = useRef(null);
  let imageIndex = 0;

  useEffect(() => {
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
          start: "top 80%",
          end: "bottom 20%",
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
        <h3 className="active-work-title">Spaces I work in</h3>
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
            <li>Onderwijsinstellingen</li>
            <li>Bibliotheken</li>
            <li>Gemeenschapscentra</li>
            <li>Boekhandels</li>
            <li>Non-profitorganisaties</li>
            <li>Ziekenhuizen</li>
            <li>Culturele instellingen</li>
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
