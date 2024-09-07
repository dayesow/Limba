import "./footer.scss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleScrollToWork = (path) => {
    event.preventDefault();
    navigate(path); // Verander naar de route van de andere pagina
    window.scrollTo(0, 0);
  };
  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h1>Ready to read?</h1>
        </div>

        <div className="footer-contact">
          <a
            href="mailto:limba.wml@gmail.com"
            className="hover-underline-animation"
          >
            limba.wml@gmail.com
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-sitemap">
          <h3>Sitemap</h3>
          <ul>
            <li>
              <a
                onClick={() => handleScrollToWork("/home")}
                className="hover-underline-animation"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollToWork("/about")}
                className="hover-underline-animation"
              >
                Over ons
              </a>
            </li>

            <li>
              <a
                onClick={() => handleScrollToWork("/gallery")}
                className="hover-underline-animation"
              >
                Gallerij
              </a>
            </li>
            <li>
              <a
                onClick={() => handleScrollToWork("/bookpromotion")}
                className="hover-underline-animation"
              >
                Limbaverse
              </a>
            </li>
            <li>
              <a
                href="https://buy.stripe.com/00g7uA2UR3NX9Ko6oo"
                className="hover-underline-animation"
              >
                Koop Limbaverse
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-socials">
          <h3>Socials</h3>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/limba_reads/?hl=nl"
                className="hover-underline-animation"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://be.linkedin.com/in/will-limba-moleka-298909181"
                className="hover-underline-animation"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/readandrelax_vzw/?hl=nl"
                className="hover-underline-animation"
              >
                Read & Relax
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <h4>LIMBA</h4>
        <p>&copy; 2024</p>
        <p>
          <a
            href="#top"
            onClick={scrollToTop}
            className="hover-underline-animation"
          >
            Naar boven ↑
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
