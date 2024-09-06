import "./footer.scss";

const Footer = () => {
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
              <a href="/home" className="hover-underline-animation">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover-underline-animation">
                About
              </a>
            </li>

            <li>
              <a href="/gallery" className="hover-underline-animation">
                Gallery
              </a>
            </li>
            <li>
              <a href="/bookpromotion" className="hover-underline-animation">
                Latest books
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
            Back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
