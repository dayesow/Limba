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

  let heroServices = ["Leescoach", "Schrijver", "Illustrator"];
  const descriptionText = "Lezen is bestemd voor iedereen";
  return (
    <div className="hero-container">
      <h1 className="our-text">LIMBA</h1>

      <div className="hero-sub-container">
        <p>{descriptionText}</p>
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
