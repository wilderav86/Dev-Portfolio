import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ThemeContext } from "../../contexts/ThemeContext";
import Skills from "../Skills";

import "./Landing.Style.css";

//brief description, technologies used

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

  const BGLight = data.allFile.edges[0].node.childImageSharp.gatsbyImageData;
  const BGDark = data.allFile.edges[1].node.childImageSharp.gatsbyImageData;

  return (
    <div id="home" className="landing-container">
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
      <div className="content">
        <div className="main">
          <h4>header</h4>
          <h1>name</h1>
          <h2>title</h2>
        </div>
      </div>

      <Skills />
    </div>
  );
};

export default Landing;
