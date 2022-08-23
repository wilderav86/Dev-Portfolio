import React, { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import AnimateButton from "../animations/animateButton";
import { ThemeContext } from "../contexts/ThemeContext";

import "./Navbar.Style.css";

const Hamburger = ({ renderNavLinks, expanded, setExpanded }) => {
  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  return (
    <div className="hamburgerContainer">
      <div className="hamburger">
        <AnimateButton>
          <GiHamburgerMenu
            className={lightTheme ? "dark-text" : "light-text"}
            size={30}
            onClick={() => setExpanded(!expanded)}
          />
        </AnimateButton>
      </div>
      <div className={!expanded ? "linkContainer collapsed" : "linkContainer"}>
        {renderNavLinks}
      </div>
    </div>
  );
};

export default Hamburger;
