import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

import "./About.Style.css";
import { GatsbyImage } from "gatsby-plugin-image";
import { ThemeContext } from "../../contexts/ThemeContext";

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
    <div id="about" className="about-container">
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
      <Container>
        <h1>Adam Wilder</h1>
        <h2>Front end developer</h2>
      </Container>
    </div>
  );
};

export default About;
