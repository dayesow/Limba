import { useEffect } from "react";
import { gsap } from "gsap";
import "./about.scss";
import Footer from "../footer/Footer";
import SplitType from "split-type";

const About = () => {
  useEffect(() => {
    const ourText = new SplitType("h3.our-text", { types: "chars" });
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

    gsap.fromTo(
      ".limba-left",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.out",
        delay: 1, // Adding delay to start after text animation
      }
    );
  }, []);

  return (
    <div>
      <div className="about-container">
        <div className="about-header">
          <div className="about-top">
            <h3 className="our-text">Over Limba</h3>
          </div>
        </div>
        <div className="about-main-container">
          <div className="about-left">
            <img
              className="limba-left"
              src="/assets/silversquare3.jpg"
              alt="Limba About Picture"
            />
          </div>
          <div className="about-right ">
            <div>
              <hr></hr>

              <h3>De man achter Limba</h3>
              <p>
                Mijn naam is Will-Limba Moleka (24). Ik ben leescoach, schrijver
                en illustrator. In 2024 heb ik LIMBA COMMV opgericht met als
                missie om het leesplezier en de leesmotivatie onder jongeren te
                stimuleren. Ik werk samen met scholen, bibliotheken en publieke
                organisaties om te laten zien hoe we samen het belang van
                literatuur en boeken weer op de voorgrond kunnen brengen.
                <br></br> <br></br>Mijn passie voor leesontwikkeling begon op
                mijn 18e, toen een leerkracht Nederlands en Engels met zijn
                enthousiasme voor boeken me inspireerde. Hoewel ik zelf weinig
                las, raakte ik gefascineerd en besloot ik mezelf uit te dagen
                door een van de dikste boeken op de leeslijst te lezen: Op
                Commando van Tom Clancy. Dit bleek een keerpunt in mijn leven.
                Het zaadje dat mijn leraar plantte, ontkiemde toen ik de laatste
                pagina omsloeg, en al snel veranderde ik van een niet-lezer in
                een fervente boekenwurm. Vandaag de dag ben ik leesbevorderaar,
                geïnspireerd door de leraar die me liet zien hoe geweldig boeken
                kunnen zijn.
              </p>
            </div>
            <div>
              <hr></hr>

              <h3>Missie</h3>
              <p>
                Als leescoach is mijn missie om de leespromotie binnen
                organisaties te versterken. Ik werk nauw samen met scholen,
                bibliotheken en andere instellingen om hun leesbeleid,
                leesomgeving en leesdidactiek te verbeteren. Samen hoop ik
                doelgerichte plannen op te stellen die niet alleen het lezen
                zichtbaarder maken, maar ook niet-lezers begeleiden naar
                enthousiaste lezers. Mijn aanpak draait om het creëren van
                positieve leeservaringen en het bevorderen van een duurzame
                leescultuur.
              </p>
            </div>
            <div>
              <hr></hr>

              <h3>Waarden</h3>
              <p>
                <ul>
                  <li>
                    <b>Leesplezier</b>: Voordat je niet-lezers kunt overtuigen
                    van het belang van lezen, moet je ervoor zorgen dat lezen
                    plezierig is. Een negatieve houding ten opzichte van lezen
                    maakt het moeilijk om impact te maken. Daarom staat
                    leesplezier centraal in al mijn diensten.
                  </li>
                  <br></br>
                  <li>
                    <b>Creativiteit</b>: In een tijd waarin boeken moeten
                    concurreren met diverse vormen van media, is creativiteit
                    essentieel om lezen aantrekkelijk te houden. Daarom zet
                    LIMBA creativiteit in om het lezen in de schijnwerpers te
                    zetten.
                  </li>
                  <br></br>
                  <li>
                    <b>Representatie</b>: Lezen is voor iedereen. Bij LIMBA vind
                    ik het belangrijk om verschillende perspectieven, culturen
                    en verhalen te belichten. Alleen door deze diversiteit te
                    omarmen, kunnen we samen het belang van literatuur behouden
                    en versterken.
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <hr></hr>

              <h3>Visie</h3>
              <p>
                Met LIMBA wil ik een organisatie opbouwen die een aanzienlijke
                impact heeft op de leesvaardigheid, leesattitude en
                leesmotivatie van niet-lezers, met een focus op jongeren. Mijn
                doel is om het lezen van boeken zichtbaarder en aantrekkelijker
                te maken in onze samenleving. Daarnaast streef ik ernaar dat
                boeken op macroniveau worden gepromoot, bijvoorbeeld via
                reclameborden, advertenties, evenementen en tv-reclames, zodat
                literatuur een prominente plaats krijgt in het dagelijks leven.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
