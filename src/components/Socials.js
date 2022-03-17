import React from "react";
import Adam_Wilder_Resume from "../CV/Adam_Wilder_Resume.pdf";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Cv from "../assets/cv.svg";

import "./Socials.Style.css";

const Socials = () => {
  return (
    <div className="socials-container">
      <a
        href="https://www.linkedin.com/in/adam-wilder-8928381a6/"
        target="_blank"
      >
        <AiFillLinkedin size={70} />
      </a>
      <a href="https://github.com/wilderav86?tab=repositories" target="_blank">
        <AiFillGithub size={70} />
      </a>
      <a href={Adam_Wilder_Resume} target="_blank">
        <Cv size={70} />
      </a>
    </div>
  );
};

export default Socials;
