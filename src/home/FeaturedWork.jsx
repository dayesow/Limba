/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./work.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const useWindowSize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

const Work = ({ data }) => {
  if (!data) {
    return null; // Return null if no data is provided
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const isMobile = useWindowSize();

  // Use template literals correctly to construct the image source path
  const imgSrc = `src/assets/${data.imgSrc}`;

  return (
    <div
      style={{
        width: `${isMobile ? 100 : data.width}%`,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <img
        src={imgSrc}
        alt={data.titleWork}
        style={{
          width: "100%",
          objectFit: isMobile ? "contain" : "cover",
          height: isMobile ? "100%" : "450px",
        }}
      />
      <div className="work-container">
        <div className="work-info">
          <p className="work-client">{data.client.toUpperCase()}</p>
          <p className="work-title">{data.titleWork}</p>
          <p className="work-year">{data.year}</p>
        </div>
        <div className="work-initials">
          <p>{data.initialsWork}</p>
        </div>
        <div className="work-number">
          <p>{data.numberWork}</p>
        </div>
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  // Array of featured work data
  const featuredWork = [
    {
      client: "Bibliotheek Permeke - Antwerpen",
      titleWork: "Leescoach - workshops",
      initialsWork: "",
      numberWork: "01",
      year: 2024,
      imgSrc: "permekesamenwerking.jpeg",
      width: 50,
    },
    {
      client: "Limbaverse",
      titleWork: "Mijn eerste boek",
      initialsWork: "",
      numberWork: "02",
      year: 2024,
      imgSrc: "coverbook.webp",
      width: 50,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      ".animate-hr-project",
      { width: "0%" }, // Initial state
      {
        width: "100%", // Final state
        duration: 3, // Duration in seconds
        ease: "power4.out", // Easing function for a smoother animation
        scrollTrigger: {
          trigger: ".animate-hr-project",
          start: "top 80%", // Start animation when the top of the element hits 80% of the viewport height
          end: "top 30%", // End animation when the top of the element hits 30% of the viewport height
          scrub: false, // Synchronize animation with scroll, with a 1-second delay
        },
      }
    );

    const ourText = new SplitType("h3.featured-work-title", { types: "chars" });
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
          trigger: "h3.featured-work-title",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  const handleScrollToWork = (event) => {
    event.preventDefault();
    document.querySelector("#work-container").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="featured-work-container">
      <div className="featured-work-header">
        <hr className="animate-hr-project"></hr>
        <div className="featured-work-title-container">
          <h3 className="featured-work-title">Projecten</h3>

          <div className="hover-underline-animation">
            <a
              href="#work-container"
              className="discover-link"
              onClick={handleScrollToWork}
            >
              Discover
            </a>
            <div className="icon down">
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
      </div>
      <div id="work-container" className="featured-work-component-container">
        {featuredWork.map((work, index) => (
          <Work key={index} data={work} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;
