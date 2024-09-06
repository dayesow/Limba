import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./gallery.scss"; // Dit bestand gaan we gebruiken voor de CSS
import { useNavigate } from "react-router-dom";

const images = [
  "limbaverseCover.png",
  "limba-process.jpeg",
  "limbaverseCover.png",
  "limba-process.jpeg",
  "limbaverseCover.png",
  "limba-process.jpeg",
  "limba-hero.jpg",
];

const Gallery = () => {
  const galleryRef = useRef(null);
  const navigate = useNavigate();

  const handleScrollToWork = (event) => {
    event.preventDefault();
    navigate("/gallery"); // Verander naar de route van de andere pagina
  };
  useEffect(() => {
    const gallery = galleryRef.current;

    gsap.to(gallery, {
      xPercent: -100,
      duration: 300,
      repeat: -1,
      ease: "linear",
    });

    return () => {
      gsap.killTweensOf(gallery);
    };
  }, []);

  return (
    <div className="gallery-container">
      <div className="gallery-header-container">
        <h3>Gallery</h3>
        <div className="hover-underline-animation">
          <a
            href="/gallery"
            className="discover-link"
            onClick={handleScrollToWork}
          >
            Ontdek meer
          </a>
          <div className="icon right-up">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13 19L19.5 12L13 5"
                stroke="black"
                strokeMiterlimit="10"
              ></path>
              <path d="M19 12H3" stroke="black" strokeMiterlimit="10"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="gallery" ref={galleryRef}>
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={`src/assets/${image}`}
            alt={`Gallery Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
