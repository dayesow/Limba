import { useEffect, useRef } from "react";
import gsap from "gsap";
import "./gallery.scss";
import { useNavigate } from "react-router-dom";
import SplitType from "split-type";

const Gallery = ({ images }) => {
  const galleryRef = useRef(null);
  const navigate = useNavigate();

  const handleScrollToWork = (event) => {
    event.preventDefault();
    navigate("/gallery");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const startValue = window.innerWidth <= 768 ? "top 100%" : "top 80%";
    const endValue = window.innerWidth <= 768 ? "top 30%" : "top 30%";
    const gallery = galleryRef.current;

    gsap.to(gallery, {
      xPercent: -100,
      duration: 300,
      repeat: -1,
      ease: "linear",
    });

    const ourText = new SplitType("h3.gallery-home-title", { types: "chars" });
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
          trigger: "h3.gallery-home-title",
          start: startValue, // Start animation when the top of the element hits 80% of the viewport height
          end: endValue, // End animation when the top of the element hits 30% of the viewport height
          toggleActions: "play none none none",
        },
      }
    );
    return () => {
      gsap.killTweensOf(gallery);
    };
  }, []);

  return (
    <div className="gallery-container-home">
      <div className="gallery-header-container-home">
        <h3 className="gallery-home-title">Galerij</h3>
        <div className="hover-underline-animation">
          <a
            href="/gallery"
            className="discover-link"
            onClick={handleScrollToWork}
          >
            Ontdek
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
            src={`/assets/${image}`}
            alt={`Gallery Image ${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
