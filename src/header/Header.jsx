import "./header.scss";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Header = ({ toggleMenu }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-left">
        <img
          src="src/assets/limbalogo2.png"
          alt="logo-limba"
          onClick={() => {
            navigate("/home");
            window.scrollTo(0, 0);
          }}
        />
      </div>
      <div className="header-right">
        <button className="menu-button" onClick={toggleMenu}>
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
