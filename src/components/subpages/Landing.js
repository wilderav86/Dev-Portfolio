import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ThemeContext } from "../../contexts/ThemeContext";
import Socials from "../Socials";

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
                formats: WEBP
                placeholder: BLURRED
                layout: FULL_WIDTH
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

  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  const BGLight = data.allFile.edges[0].node.childImageSharp.gatsbyImageData;
  const BGDark = data.allFile.edges[1].node.childImageSharp.gatsbyImageData;

  const { header, name, title } = data.markdownRemark.frontmatter;

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
          <h4 className="header">{header}</h4>
          <h1 className={lightTheme ? "name dark" : "name light"}>{name}</h1>
          <h2 className={lightTheme ? "title dark" : "title light"}>{title}</h2>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Landing;
