import { useEffect, useState } from "react";
import { gsap } from "gsap";
import "./bookpromotion.scss";
import SplitType from "split-type";

import Footer from "../footer/Footer";
import Gallery from "../home/GalleryHome";

const useWindowSize = () => {
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

const BookPromotion = () => {
  const isMobile = useWindowSize();
  const images = [
    "LIMBAVERSE/LIMBAVERSE_2.jpeg",
    "LIMBAVERSE/LIMBAVERSE_3.jpeg",
    "LIMBAVERSE/LIMBAVERSE_4.jpeg",
    "LIMBAVERSE/LIMBAVERSE_5.jpeg",
    "LIMBAVERSE/LIMBAVERSE_6.jpeg",
    "LIMBAVERSE/LIMBAVERSE_7.jpeg",
    "LIMBAVERSE/LIMBAVERSE_8.jpeg",
    "LIMBAVERSE/LIMBAVERSE_9.jpeg",
    "LIMBAVERSE/LIMBAVERSE_11.jpeg",
    "LIMBAVERSE/LIMBAVERSE_12.jpeg",
    "LIMBAVERSE/LIMBAVERSE_13.jpeg",
  ];
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
  const srcImage = isMobile
    ? "src/assets/limbaversecovermobile.jpeg"
    : "src/assets/coverbook.webp";
  return (
    <>
      <div style={{ overflowX: "hidden", width: "100%" }}>
        <div className="services-container">
          <div className="cover-left">
            <img className="limbacover" src={srcImage} alt="limbaversecover" />
          </div>
        </div>
        <div className="limbacovertekst">
          <a
            href="https://buy.stripe.com/00g7uA2UR3NX9Ko6oo"
            className="hover-underline-animation"
          >
            Bestel nu
          </a>
        </div>
        <div className="summary-parent-container">
          <h3 className="summary-title">Samenvatting</h3>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <div className="summary-container">
              <p>
                Hoe krijg je jongeren aan het lezen? Dat is dé vraag
                dieleesbevorderaars, leerkrachten en schrijvers uit hun slaap
                houdt. Onderzoeken naar het imago van het boek leveren al een
                tijdje een treurig plaatje op, en de gevolgen daarvan zijn af te
                lezen uit elk onderzoek naar leesvaardigheid. Het kan Will-Limba
                Moleka niet deren. Sinds zijn 20ste organiseert hij de ‘Read &
                Relax’-leesclubs, waarin jongeren samen of individueel romans en
                non-fictie lezen. Het heeft hem een scherp inzicht gegeven in
                wat jongeren doet lezen en wat hen afstoot, wat hen boeit en wat
                hen doet afhaken.
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
                In Limbaverse volgen we Limba, een 16-jarige jongen die zich
                thuis verveelt en niets te doen heeft. Gedurende de hele
                zomervakantie zoekt hij naar een nieuwe activiteit, maar vindt
                niets. Totdat hij samen met Will, een bibliotheekmedewerker, op
                avontuur gaat in Literaria, een universum dat gevuld is met
                werelden die gebaseerd zijn op boekengenres. Met zijn mix van
                fictie en non-fictie zal Limbaverse elke lezer verrassen – zelfs
                zij die nog niet weten dat ze lezers zijn.
              </p>
            </div>
            <div className="summary-right-container">
              <img
                src="src/assets/LIMBAVERSE/LIMBAVERSE_1.png"
                alt="LimbaVerse Drawing"
              />
            </div>
          </div>
        </div>
        <div className="container-after-header">
          <div className="after-header-left">
            <img src="src/assets/process1.jpeg" alt="Limba process" />
            <img src="src/assets/process3.jpeg" alt="Limba process" />
            {/* <img src="src/assets/process4.jpeg" alt="Limba process" /> */}
          </div>
          <div className="after-header-right">
            <h3 className="after-header-title">Process</h3>

            <div className="process-container">
              <p className="process-nunmber">01.</p>
              <div className="process-content">
                <h4>Het Concept</h4>
                <p>
                  Uitgeverij Houtekiet kwam met het voorstel om het boek te
                  schrijven zonder dat ik een manuscript had. Ik moest dus
                  enkele maanden intensief nadenken, brainstormen en lezen om
                  uit te zoeken hoe ik het verhaal vorm zou geven. Ik wilde niet
                  aankomen met een droge boekenlijst voor jongeren, zeker niet
                  voor mijn doelgroep van 12-14 jaar. Limbaverse moest een
                  verhaal worden vol levendige karakters, beruchte schurken en
                  een inspirerend plot waarin de lezer zich kon verliezen.
                </p>
              </div>
            </div>

            <div className="process-container">
              <p className="process-nunmber">02.</p>
              <div className="process-content">
                <h4>Schrijven</h4>
                <p>
                  Als iemand mij twee jaar geleden de vraag zou stellen wanneer
                  ik mijn eigen boek zou uitbrengen, dan zou ik snel antwoorden
                  dat ik pas op mijn dertig zou schrijven, maar sinds een
                  uitgever met die vraag kwam kon ik onmogelijk nee zeggen. Dus
                  je moet je eens inbeelden hoe blij, maar ook tegelijkertijd
                  onzeker was. Vroeger vreesde ik de pen, omdat ik bang was om
                  spellingsfouten te maken. <br></br> <br></br>Toen ik het
                  contract signeerde, wist ik dat ik met die ingesteldgheid
                  nooit het boek zou afmaken. Om deze reden besloot ik om mijn
                  angst iedere dag te confronteren door simpelweg eraan te
                  beginnen zonder na te denken totdat ik het plezier in begon te
                  vinden en zelfs ontdekte dat het ongelofelijk leerrijk is en
                  al mijn taalvaardigheden op een korte tijd heeft versterkt.
                </p>
              </div>
            </div>

            <div className="process-container">
              <p className="process-nunmber">03.</p>
              <div className="process-content">
                <h4>Illustreren</h4>
                <p>
                  Zou je me geloven als ik zeg dat ik pas anderhalf jaar geleden
                  ben begonnen met illustreren? Het is echt waar! Ik heb mezelf
                  leren tekenen nadat ik een iPad kocht om posters voor mijn
                  evenementen te ontwerpen — Canva bleek te beperkt. Tijdens de
                  eerste vergadering met de redacteur en directrice van mijn
                  uitgeverij benadrukte ik dat het boek illustraties moest
                  bevatten, want de nieuwe generatie is dol op beelden. De vraag
                  was alleen: “Wie gaat de illustraties maken?” <br></br>
                  <br></br> Nou… ik zag dit als de perfecte kans om mijn
                  vaardigheden echt op de proef te stellen. Het betekende dat ik
                  zowel het boek zou moeten illustreren als schrijven. Ik
                  kondigde dit aan met een glimlach, maar vanbinnen dacht ik:
                  “Je bent echt gek!” Terugkijkend was het inderdaad een gewaagd
                  idee. Maar tijdens het illustreren ontdekte ik dat het juist
                  een troef was. Zodra ik een illustratie af had, kon ik
                  eenvoudig beschrijven wat ik voor me zag, wat het schrijven
                  veel makkelijker maakte. Ik kan je verzekeren dat zonder de
                  illustraties het boek er heel anders had uitgezien. Dus ik ben
                  blij dat ik het risico heb genomen!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bookpromotion-dual">
          <div className="dual-right">
            <div>
              <h4>Bestel nu en betreed mijn universum</h4>
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
                <p>Will-Limba Moleka</p>
              </div>
            </div>
            <hr></hr>
            <div>
              <div className="dual-info">
                <h5>Verschijningsdatum</h5>
                <p>11/09/2024</p>
              </div>
              <hr></hr>
            </div>
          </div>
        </div>
        <div style={{ position: "relative", zIndex: 5 }}>
          <Gallery images={images} />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default BookPromotion;
