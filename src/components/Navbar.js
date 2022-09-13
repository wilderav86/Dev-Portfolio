import React, { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { useStaticQuery, graphql, Link } from "gatsby";
import Toggle from "./Toggle";
import AnimateButton from "../animations/animateButton";
import Hamburger from "./Hamburger";
import { useDetectOutsideClick } from "../hooks/useDetectOutsideClick";

import "./Navbar.Style.css";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query newNavQuery {
      site {
        siteMetadata {
          subPages {
            id
            page
          }
        }
      }
    }
  `);
  const [lightTheme, setLightTheme] = useContext(ThemeContext);
  const navRef = useRef(null);
  const [expanded, setExpanded] = useDetectOutsideClick(navRef, false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setPrevScrollPos(currentScrollPos);
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);

    setExpanded(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [prevScrollPos, visible, handleScroll]);

  const message = lightTheme ? "lighter" : "darker";

  const navLinks = data.site.siteMetadata.subPages;

  const renderNavLinks = navLinks.map((navLink, key) => {
    return (
      <div key={key} className="navbarLink" onClick={() => setExpanded(false)}>
        <AnimateButton>
          <a
            href={navLink.id}
            className={
              lightTheme ? "navbarLink dark-text" : "navbarLink light-text"
            }
          >
            {navLink.page}
          </a>
        </AnimateButton>
      </div>
    );
  });

  return (
    <nav
      className={visible ? "navbarContainer" : "navbarContainer visible"}
      ref={navRef}
    >
      <div className={lightTheme ? "navBackground" : "navBackground dark"}>
        <div className="toggle-text-container">
          <div className="chunk-container">
            <p className={lightTheme ? "text-chunk light" : "text-chunk dark"}>
              for a
            </p>
            <p
              className={
                lightTheme ? "text-chunk light color" : "text-chunk dark color"
              }
            >
              <strong>{`${message}`}</strong>
            </p>
            <p className={lightTheme ? "text-chunk light" : "text-chunk dark"}>
              mood, press
            </p>
          </div>

          <Toggle />
        </div>
        <div className="navbarDesktopLinks">{renderNavLinks}</div>
        <Hamburger
          renderNavLinks={renderNavLinks}
          expanded={expanded}
          setExpanded={setExpanded}
          lightTheme={lightTheme}
        />
      </div>
    </nav>
  );
};

export default Navbar;
