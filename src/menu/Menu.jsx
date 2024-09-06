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
              About
            </a>
          </li>

          <li>
            <a onClick={() => handleNavigation("/gallery")}>Gallery</a>
          </li>
          <li>
            <a onClick={() => handleNavigation("/bookpromotion")}>
              Latest book
            </a>
          </li>
          <li>
            <a href="https://buy.stripe.com/00g7uA2UR3NX9Ko6oo">
              Koop Limbaverse
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
