import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { ThemeContext } from "../../contexts/ThemeContext";
import Skills from "../Skills.js";

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
  const BGDark = data.allFile.edges[1].node.childImageSharp.gatsbyImageData;

  const title = data.allMarkdownRemark.nodes[0].frontmatter.title;
  const body = data.allMarkdownRemark.nodes[0].html;

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
          className="backgroundImage opaque-bg"
        />
      )}
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
