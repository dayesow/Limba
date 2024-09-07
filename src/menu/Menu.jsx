import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./menu.scss";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Menu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        duration: 0.4,
        x: 0,
        ease: "power4.inOut",
      });
    } else {
      gsap.to(menuRef.current, {
        duration: 0.4,
        x: "-100%",
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  const handleNavigation = (path) => {
    onClose(); // Close the menu
    setTimeout(() => {
      navigate(path);
      window.scrollTo(0, 0);
    }, 600); // Wait for the menu close animation to complete
  };

  return (
    <div ref={menuRef} className="menu">
      <button className="close-button" onClick={onClose}>
        Close
      </button>
      <nav>
        <ul>
          <li>
            <a onClick={() => handleNavigation("/")}>Home</a>
          </li>
          <li>
            <a
              onClick={() => {
                handleNavigation("/about");
              }}
            >
              Over ons
            </a>
          </li>

          <li>
            <a onClick={() => handleNavigation("/gallery")}>Gallerij</a>
          </li>
          <li>
            <a onClick={() => handleNavigation("/bookpromotion")}>Limbaverse</a>
          </li>

          <li>
            <a href="https://lu.ma/calendar/cal-hikbaXGuzfFH9l6">Events</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
