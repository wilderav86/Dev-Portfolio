import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ThemeContext } from "../../contexts/ThemeContext";

import "./Contact.Style.css";
import ContactForm from "../ContactForm";
import ContactInfo from "../ContactInfo";

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
  const BGDark = data.allFile.edges[1].node.childImageSharp.gatsbyImageData;

  return (
    <div id="contact" className="contact-container">
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
          className="backgroundImage semi-opaque-bg"
        />
      )}
      <div className="contact-form-container">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
};

export default Contact;
