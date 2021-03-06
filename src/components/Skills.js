import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Bootstrap from "../assets/bootstrap.svg";
import Css from "../assets/Css.svg";
import Gatsby from "../assets/gatsby.svg";
import Graphql from "../assets/graphql.svg";
import Html5 from "../assets/html5.svg";
import Javascript from "../assets/javascript.svg";
import ReactIcon from "../assets/reacticon.svg";
import Nextjs from "../assets/nextjs.svg";

import "./Skills.Style.css";

const Skills = () => {
  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  const icons = [
    // { component: <Html5 />, name: "HTML" },
    // { component: <Css />, name: "CSS" },
    { component: <Javascript />, name: "Javascript" },
    { component: <ReactIcon />, name: "React" },
    // { component: <Bootstrap />, name: "Bootstrap" },
    { component: <Gatsby />, name: "Gatsby" },
    { component: <Nextjs />, name: "NextJs" },
    { component: <Graphql />, name: "GraphQL" },
  ];

  const renderIcons = icons.map((icon, id) => {
    return (
      <div className="icon-container" key={id}>
        <div className="icon">{icon.component}</div>
        <div className="name">{icon.name}</div>
      </div>
    );
  });

  return (
    <div className="skills-container">
      <h2 className="page-title accent-color">SKILLS</h2>
      <div className="icons-group-container">{renderIcons}</div>
    </div>
  );
};

export default Skills;
