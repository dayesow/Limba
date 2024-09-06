import { useEffect } from "react";
import { gsap } from "gsap";
import "./bookpromotion.scss";
import SplitType from "split-type";

import Footer from "../footer/Footer";

const BookPromotion = () => {
  useEffect(() => {
    const ourText = new SplitType("h3.book-promotion-title", {
      types: "chars",
    });
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

    const resumeText = new SplitType("h3.summary-title", { types: "chars" });
    const resumeChars = resumeText.chars;

    gsap.fromTo(
      resumeChars,
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
          trigger: "h3.summary-title",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );

    const processText = new SplitType("h3.after-header-title", {
      types: "chars",
    });
    const processChars = processText.chars;

    gsap.fromTo(
      processChars,
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
          trigger: "h3.after-header-title",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div style={{ overflowX: "hidden", width: "100%" }}>
        <div className="services-container">
          <div className="cover-left">
            <img
              className="limbacover"
              src="src/assets/coverbook.webp"
              alt="limbaversecover"
            />
          </div>
        </div>
        <div className="limbacovertekst">
          <a
            href="https://buy.stripe.com/00g7uA2UR3NX9Ko6oo"
            className="hover-underline-animation"
          >
            Koop nu
          </a>
        </div>
        <div className="summary-parent-container">
          <h3 className="summary-title">Resume</h3>

          <div className="summary-container">
            <p>
              Hoe krijg je jongeren aan het lezen? Dat is dé vraag
              dieleesbevorderaars, leerkrachten en schrijvers uit hun slaap
              houdt. Onderzoeken naar het imago van het boek leveren al een
              tijdje een treurig plaatje op, en de gevolgen daarvan zijn af te
              lezen uit elk onderzoek naar leesvaardigheid. Het kan Will-Limba
              Moleka niet deren. Sinds zijn 20ste organiseert hij de ‘Read &
              Relax’-leesclubs, waarin jongeren samen of individueel romans en
              non-fictie lezen. Het heeft hem een scherp inzicht gegeven in wat
              jongeren doet lezen en wat hen afstoot, wat hen boeit en wat hen
              doet afhaken.
            </p>
            <br></br>
            <p>
              Sinds zijn 20ste organiseert hij de ‘Read & Relax’-leesclubs,
              waarin jongeren samen of individueel romans en non-fictie lezen.
              Het heeft hem een scherp inzicht gegeven in wat jongeren doet
              lezen en wat hen afstoot, wat hen boeit en wat hen doet afhaken.
              Moleka heeft intussen zijn eigen zaak opgericht, Limba, waarmee
              hij literaire evenementen organiseert, altijd met als doel de
              zichtbaarheid van het lezen te vergroten door het leesplezier te
              stimuleren.
            </p>
            <br></br>
            <p>
              In Limbaverse volgen we Limba, een 16-jarige jongen die zich thuis
              verveelt en niets te doen heeft. Gedurende de hele zomervakantie
              zoekt hij naar een nieuwe activiteit, maar vindt niets. Totdat hij
              samen met Will, een bibliotheekmedewerker, op avontuur gaat in
              Literaria, een universum dat gevuld is met werelden die gebaseerd
              zijn op boekengenres. Met zijn mix van fictie en non-fictie zal
              Limbaverse elke lezer verrassen – zelfs zij die nog niet weten dat
              ze lezers zijn.
            </p>
          </div>
        </div>
        <div className="container-after-header">
          <div className="after-header-left">
            <img src="src/assets/limba-process.jpeg" alt="limbaspeaking" />
          </div>
          <div className="after-header-right">
            <h3 className="after-header-title">Process</h3>

            <div className="process-container">
              <p className="process-nunmber">01.</p>
              <div className="process-content">
                <h4>A holistic studio</h4>
                <p>
                  We run our studio on holistic inputs and decisions. Great
                  ideas can come from anyone and we encourage thoughtful
                  questions and perspectives.
                </p>
              </div>
            </div>

            <div className="process-container">
              <p className="process-nunmber">02.</p>
              <div className="process-content">
                <h4>A holistic studio</h4>
                <p>
                  We run our studio on holistic inputs and decisions. Great
                  ideas can come from anyone and we encourage thoughtful
                  questions and perspectives.
                </p>
              </div>
            </div>

            <div className="process-container">
              <p className="process-nunmber">03.</p>
              <div className="process-content">
                <h4>A holistic studio</h4>
                <p>
                  We run our studio on holistic inputs and decisions. Great
                  ideas can come from anyone and we encourage thoughtful
                  questions and perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bookpromotion-dual">
          <div className="dual-right">
            <div>
              <h4>
                Pre-order nu en betreed mijn universum om je leesplezier te
                simuleren. The website and art direction is a reflection of
                those attributes. Blabla Blabla Blabla Blabla
                {/* Custo is building the first ever smart mailbox. They focus on
              bringing a product that is not only safe and practical but also
              beautiful by design. The website and art direction is a reflection
              of those attributes. */}
              </h4>
              <div style={{ marginTop: "4rem", marginBottom: "4rem" }}>
                <a
                  href="https://buy.stripe.com/00g7uA2UR3NX9Ko6oo"
                  className="hover-underline-animation"
                >
                  Bemachtig hier jouw exemplaar
                </a>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="dual-info">
                <h5>Auteur</h5>
                <p>Will Limba Moleka</p>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="dual-info">
                <h5>Verschijningsdatum</h5>
                <p>22/08/2024</p>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BookPromotion;
