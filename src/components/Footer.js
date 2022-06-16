import React from "react";
import AnimateButton from "../animations/animateButton";
import Gatsby from "../assets/gatsby.svg";

import "./Footer.Style.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-text-group">
          <div className="page-body accent-color">Built with </div>
          <div className="footer-icon">
            <Gatsby />
          </div>{" "}
        </div>

        <div>
          <AnimateButton>
            <a
              href="https://github.com/wilderav86/Dev-Portfolio"
              target="_blank"
              className="footer-link page-body"
            >
              View Code
            </a>
          </AnimateButton>
        </div>
      </div>
    </div>
  );
};

export default Footer;
