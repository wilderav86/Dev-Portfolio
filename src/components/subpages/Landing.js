import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { ThemeContext } from "../../contexts/ThemeContext";
import Socials from "../Socials";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { AnimatePresence, motion } from "framer-motion";

import "./Landing.Style.css";

const Landing = () => {
  const data = useStaticQuery(graphql`
    query landingQuery {
      allFile(
        filter: { relativeDirectory: { regex: "/landing/" } }
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
      markdownRemark(frontmatter: { section: { eq: "landing" } }) {
        frontmatter {
          header
          name
          title
        }
        html
      }
    }
  `);

  const [lightTheme] = useContext(ThemeContext);

  const BGLight = data.allFile.edges[0].node.childImageSharp.gatsbyImageData;
  const BGLightConverted = convertToBgImage(BGLight);

  const BGDark = data.allFile.edges[1].node.childImageSharp.gatsbyImageData;
  const BGDarkConverted = convertToBgImage(BGDark);

  const { header, name, title } = data.markdownRemark.frontmatter;

  return (
    <div id="home" className="landing-container">
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
              className="landing-backgroundImage"
              Tag="section"
              {...BGDarkConverted}
              preserveStackingContext
            />
          </motion.div>
          // <GatsbyImage
          //   image={BGDark}
          //   alt="background image"
          //   className="backgroundImage"
          // />
        )}
      </AnimatePresence>

      <div className="content">
        <div className="main">
          <div className="banner">
            <h4 className={lightTheme ? "header light" : "header"}>{header}</h4>
            <h1
              className={
                lightTheme ? "landing-name dark" : "landing-name light"
              }
            >
              {name}
            </h1>
            <h2 className={lightTheme ? "title dark" : "title light"}>
              {title}
            </h2>
          </div>

          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Landing;
