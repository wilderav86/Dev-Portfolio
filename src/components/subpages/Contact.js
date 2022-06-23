import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ThemeContext } from "../../contexts/ThemeContext";
import ContactForm from "../ContactForm";
import ContactInfo from "../ContactInfo";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import { AnimatePresence, motion } from "framer-motion";

import "./Contact.Style.css";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query contactQuery {
      allFile(
        filter: { relativeDirectory: { regex: "/contact/" } }
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
    <div id="contact" className="contact-container">
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
              className="landing-backgroundImage "
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
      <div className="contact-form-container">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

{
  /* {lightTheme ? (
        <GatsbyImage
          image={BGLight}
          alt="background image"
          className="backgroundImage"
        />
      ) : (
        <GatsbyImage
          image={BGDark}
          alt="background image"
          className="backgroundImage semi-opaque-bg"
        />
      )} */
}

export default Contact;
