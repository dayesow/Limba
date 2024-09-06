import "./hero.scss";
import { gsap } from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

const Hero = () => {
  useEffect(() => {
    const ourText = new SplitType("h1.our-text", { types: "chars" });
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

  let heroServices = [
    "Illustrator",
    "Writer",
    "Leescoach",
    "Creative Workshops",
  ];

  return (
    <div className="hero-container">
      <h1 className="our-text">LIMBA</h1>

      <div className="hero-sub-container">
        <p>
          BETOVERENDE LEESERVARINGEN EN PERSOONLIJKE GROEI <br></br>VOOR LEZERS
          VAN ALLE LEEFTIJDEN
        </p>
        <div>
          {heroServices.map((c, i) => (
            <button key={i}>{c.toUpperCase()}</button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
