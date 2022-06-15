import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ThemeContext } from "../../contexts/ThemeContext";
import Socials from "../Socials";

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

  const [lightTheme] = useContext(ThemeContext);

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
