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

  //State
  const [lightTheme] = useContext(ThemeContext);

  //Background and content
  const BGLight = data.allFile.edges[0].node.childImageSharp.gatsbyImageData;
  const BGLightConverted = convertToBgImage(BGLight);

  const BGDark = data.allFile.edges[1].node.childImageSharp.gatsbyImageData;
  const BGDarkConverted = convertToBgImage(BGDark);

  const { header, name, title } = data.markdownRemark.frontmatter;

  //Animation variants

  const animateContainer = {
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        type: "spring",
        mass: 0.35,
        stiffness: 75,
        duration: 0.8,
        staggerChildren: 0.8,
      },
    },
  };

  const animateHeader = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animateItem = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };

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
            <motion.div
              initial="hidden"
              animate="visible"
              variants={animateContainer}
            >
              <motion.h4
                variants={animateHeader}
                // initial={{ opacity: 0 }}
                // animate={{ opacity: 1 }}
                // transition={{ duration: 0.8 }}
                className={lightTheme ? "header light" : "header"}
              >
                {header}
              </motion.h4>

              <motion.h1
                variants={animateItem}
                className={
                  lightTheme ? "landing-name dark" : "landing-name light"
                }
              >
                {name}
              </motion.h1>
              <motion.h2
                variants={animateItem}
                className={lightTheme ? "title dark" : "title light"}
              >
                {title}
              </motion.h2>
            </motion.div>
          </div>

          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Landing;
