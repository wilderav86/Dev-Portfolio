import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "../../contexts/ThemeContext";
import Skills from "../Skills.js";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { AnimatePresence, motion } from "framer-motion";

import "./About.Style.css";

//brief description, technologies used

const About = () => {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      allFile(
        filter: { relativeDirectory: { regex: "/about/" } }
        sort: { fields: name, order: ASC }
      ) {
        edges {
          node {
            childImageSharp {
              gatsbyImageData(
                quality: 100
                aspectRatio: 1.5
                formats: WEBP
                placeholder: BLURRED
                layout: CONSTRAINED
              )
            }
            name
          }
        }
      }
      allMarkdownRemark(filter: { frontmatter: { section: { eq: "about" } } }) {
        nodes {
          frontmatter {
            description
            title
          }
          html
        }
      }
    }
  `);

  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  const BGLight = data.allFile.edges[0].node.childImageSharp.gatsbyImageData;
  const BGLightConverted = convertToBgImage(BGLight);

  const BGDark = data.allFile.edges[1].node.childImageSharp.gatsbyImageData;
  const BGDarkConverted = convertToBgImage(BGDark);

  const title = data.allMarkdownRemark.nodes[0].frontmatter.title;
  const body = data.allMarkdownRemark.nodes[0].html;

  return (
    <div id="about" className="about-container">
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
              className="landing-backgroundImage opaque-bg"
              Tag="section"
              {...BGDarkConverted}
              preserveStackingContext
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="about-content">
        <h2 className="page-title accent-color">{title}</h2>
        <div
          className={
            !lightTheme
              ? "light-text page-body about-body"
              : "dark-text page-body about-body"
          }
          dangerouslySetInnerHTML={{ __html: body }}
        />

        <Skills />
      </div>
    </div>
  );
};

export default About;
