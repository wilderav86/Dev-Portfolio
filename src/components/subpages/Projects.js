import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "../../contexts/ThemeContext";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { AnimatePresence, motion } from "framer-motion";

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
                formats: WEBP
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

  const BGLight = data.allFile.edges[0].node.childImageSharp.gatsbyImageData;
  const BGLightConverted = convertToBgImage(BGLight);

  const BGDark = data.allFile.edges[1].node.childImageSharp.gatsbyImageData;
  const BGDarkConverted = convertToBgImage(BGDark);

  return (
    <div id="projects" className="projects-container">
      <AnimatePresence>
        {lightTheme && (
          <motion.div
            className="fade-in"
            intitial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BackgroundImage
              className="landing-backgroundImage"
              Tag="section"
              {...BGLightConverted}
              preserveStackingContext
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!lightTheme && (
          <motion.div
            className="fade-in"
            intitial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BackgroundImage
              className="landing-backgroundImage semi-opaque-bg"
              Tag="section"
              {...BGDarkConverted}
              preserveStackingContext
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="header">
        <h2 className="projects-header">PROJECTS</h2>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Projects;
