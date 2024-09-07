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
          Bent u klaar om jongeren te inspireren en hun leesplezier te
          verbeteren? Ontdek hoe ik u daarbij kan helpen!
          <br />
          <br />
        </h3>

        <AccordionItem title="Lezingen voor jongeren">
          <p className="accordion-text">
            Boek me voor een sessie waarin ik vertel hoe ik van niet-lezer naar
            boekenwurm ben gegroeid. Ik deel mijn verhaal, ga in gesprek met
            jongeren over het belang van boeken en onderzoek samen wat zou
            helpen om een positieve verandering te kunnen maken.
          </p>
        </AccordionItem>
        <AccordionItem title="Lezingen voor leerkrachten en bibliotheekmedewerkers">
          <p className="accordion-text">
            Tijdens deze lezingen inspireer ik leerkrachten en
            bibliotheekmedewerkers en deel ik mijn expertise over hoe zij
            niet-lezers kunnen omtoveren tot gemotiveerde lezers. Ik benadruk
            altijd dat leerkrachten, naast ouders, belangrijke leesbevorderaars
            zijn. Het is cruciaal dat ze zich bewust zijn van hun invloed en
            beseffen dat hun bijdrage een groot verschil kan maken in de
            leesattitude van een kind.
          </p>
        </AccordionItem>
        <AccordionItem title="Creatieve schrijf- en illustratieworkshops">
          <p className="accordion-text">
            In deze workshops plaats ik de deelnemers in mijn schoenen en geef
            ik hen een creatieve opdracht. Ik begeleid hen gedurende de workshop
            en deel meer over mijn creatieve proces, zowel in het algemeen als
            specifiek voor mijn boek.
          </p>
        </AccordionItem>
        <AccordionItem title="Samenwerkingsproject">
          <p className="accordion-text">
            Heb je zelf een project dat je samen met mij wilt uitwerken? Neem
            dan gerust contact op en stel het voor. In overleg bekijken we wat
            we kunnen doen.
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
