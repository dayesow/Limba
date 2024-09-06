import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import "./accordion.scss";

// eslint-disable-next-line react/prop-types
const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        duration: 0.6,
        height: isOpen ? contentRef.current.scrollHeight : 0,
        opacity: isOpen ? 1 : 0,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [isOpen]);

  const toggleItem = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleItem}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon" ref={iconRef}>
          {isOpen ? "-" : "+"}
        </span>
      </div>
      <div className="accordion-content" ref={contentRef}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="accordion-container">
      <div className="accordion-content-wrapper">
        <h3 className="accordion-heading">
          Bent u op zoek naar een inspirerende manier om jongeren te motiveren
          en hun leesvaardigheid te verbeteren?
          <br />
          <br />
        </h3>
        <p className="accordion-subheading">
          Waarom kiezen voor een workshop met Will-Limba?
        </p>
        <AccordionItem title="Interactieve Sessies">
          <p className="accordion-text">
            Geen saaie lezingen, maar interactieve workshops waarin jongeren
            actief deelnemen, lezen, en elkaar inspireren.
          </p>
        </AccordionItem>
        <AccordionItem title="Boost van creativiteit">
          <p className="accordion-text">
            Will-Limba’s eigen verhaal – van niet-lezer tot gepassioneerde
            boekenliefhebber – werkt aanstekelijk. Hij toont jongeren dat lezen
            niet alleen belangrijk, maar ook leuk en verrijkend kan zijn.
          </p>
        </AccordionItem>
        <AccordionItem title="Prikkelende Inhoud">
          <p className="accordion-text">
            Will-Limba verbindt literatuur met de leefwereld van jongeren. Of
            het nu gaat om populaire series, games, of maatschappelijke thema’s,
            hij weet jongeren te enthousiasmeren door aan te sluiten bij hun
            interesses.
          </p>
        </AccordionItem>
        <AccordionItem title="Community Building">
          <p className="accordion-text">
            Leerlingen of deelnemers verlaten de workshop niet alleen met nieuwe
            inzichten, maar ook met een hernieuwde leesmotivatie en de wil om
            anderen aan te steken met de leesmicrobe.
          </p>
        </AccordionItem>
        <hr />
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
  );
};

export default Accordion;
