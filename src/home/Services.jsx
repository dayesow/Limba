import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./services.scss";
import SplitType from "split-type";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      number: "01.",
      name: "Leescoach",
      description:
        "Als leescoach help, inspireer en begeleid ik scholen, bibliotheken en soortgelijke organisaties om jongeren aan te moedigen meer te lezen. Daarnaast geef ik ook lezingen en workshops waarbij ik mijn expertise en methodes deel die ik hanteer om het leesplezier en de leesmotivatie te stimuleren.",
    },
    {
      number: "02.",
      name: "Schrijver",
      description: (
        <>
          Onlangs heb ik mijn debuutroman{" "}
          <span
            onClick={() => {
              navigate("/bookpromotion");
              window.scrollTo(0, 0);
            }}
            style={{
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Limbaverse
          </span>{" "}
          geschreven en geïllustreerd. Dit boek neemt je mee op een spannend
          avontuur en is een echte pageturner, verrijkt met spectaculaire
          illustraties die ik zelf heb getekend. Maar er is meer: het verhaal
          zit boordevol verwijzingen naar andere boeiende verhalen, waardoor het
          een springplank kan zijn naar nog meer leesplezier.
        </>
      ),
    },
    {
      number: "03.",
      name: "Illustrator",
      description:
        "Naast mijn andere activiteiten ben ik ook (digitaal) illustrator. Ik creëer posters, personages en Afrikaanse maskers. Daarnaast geef ik illustratieworkshops waarbij de deelnemers in mijn schoenen staan. Tijdens deze workshops begeleid ik hen door het creatieve proces, deel ik mijn ervaringen en help ik hen hun eigen illustraties te maken.",
    },
  ];
  useEffect(() => {
    const startValue = window.innerWidth <= 768 ? "top 100%" : "top 80%";
    const endValue = window.innerWidth <= 768 ? "top 30%" : "top 30%";

    gsap.fromTo(
      ".animate-hr",
      { width: "0%" }, // Initial state
      {
        width: "100%", // Final state
        duration: 3, // Duration in seconds
        ease: "power4.out", // Easing function for a smoother animation
        scrollTrigger: {
          trigger: ".animate-hr",
          start: startValue, // Start animation when the top of the element hits 80% of the viewport height
          end: endValue, // End animation when the top of the element hits 30% of the viewport height
          scrub: false, // Synchronize animation with scroll, with a 1-second delay
        },
      }
    );

    const ourText = new SplitType("h3.service-text", { types: "chars" });
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
          trigger: "h3.service-text",
          start: startValue, // Start animation when the top of the element hits 80% of the viewport height
          end: endValue, // End animation when the top of the element hits 30% of the viewport height
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="service-container">
      <div className="service-header">
        <hr className="animate-hr"></hr>
        <h3 className="service-text">Services</h3>
      </div>
      <div className="service-main">
        {services.map((service, i) => (
          <>
            {i === 0 && <hr></hr>}
            <div className="service-sub-container" key={i}>
              <p className="sub-number">{service.number}</p>

              <p className="sub-name">{service.name}</p>

              <p className="sub-description">{service.description}</p>
            </div>
            {i + 1 !== services.length && <hr></hr>}
          </>
        ))}
      </div>
    </div>
  );
};

export default Services;
