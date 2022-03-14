import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Project.Style.css";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  const data = useStaticQuery(graphql`
    query projectsQuery {
      allFile(
        filter: { relativeDirectory: { regex: "/projectsBG/" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                quality: 50
                aspectRatio: 1.5

                placeholder: BLURRED
              )
            }
            name
          }
        }
      }
    }
  `);

  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  console.log(data);

  const BGLight = data.allFile.edges[0].node.childImageSharp.gatsbyImageData;
  const BGDark = data.allFile.edges[1].node.childImageSharp.gatsbyImageData;

  return (
    <div id="projects" className="projects-container">
      {lightTheme ? (
        <GatsbyImage
          image={BGLight}
          alt="background image"
          className="backgroundImage"
        />
      ) : (
        <GatsbyImage
          image={BGDark}
          alt="background image"
          className="backgroundImage"
        />
      )}
      <div className="title">
        <h2>Projects</h2>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Projects;
