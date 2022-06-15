import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContext";
import { BsFileCodeFill, BsFileCode } from "react-icons/bs";
import { IconContext } from "react-icons";

import "./ProjectCard.Style.css";

const ProjectCard = () => {
  const data = useStaticQuery(graphql`
    query projectCardQuery {
      allMarkdownRemark(
        filter: { frontmatter: { section: { eq: "projects" } } }
      ) {
        nodes {
          frontmatter {
            description
            gitLink
            link
            order
            title
            image {
              childImageSharp {
                gatsbyImageData(formats: WEBP, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  `);

  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  const renderCard = data.allMarkdownRemark.nodes.map((card, id) => {
    const { title, link, gitLink, description } = card.frontmatter;
    const projectImg = card.frontmatter.image.childImageSharp.gatsbyImageData;

    return (
      <Card
        bg={lightTheme ? "dark" : "light"}
        text={lightTheme ? "light" : "dark"}
        key={id}
        className="project-card"
      >
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Body>
          <GatsbyImage image={projectImg} alt="project image" />
          <div>
            <Card.Text>{description}</Card.Text>
          </div>

          <div className="button-container">
            <div>
              <a href={gitLink} className="git-link">
                {lightTheme ? (
                  <IconContext.Provider value={{ size: 40, color: "white" }}>
                    {" "}
                    <BsFileCodeFill />{" "}
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider value={{ size: 40, color: "black" }}>
                    {" "}
                    <BsFileCode />
                  </IconContext.Provider>
                )}
              </a>
            </div>

            <div>
              <a href={link} className="site-link">
                <Button
                  type="button"
                  // href={gitLink}
                  variant={lightTheme ? "outline-light" : "outline-dark"}
                  whiteSpace="normal"
                >
                  View Site
                </Button>
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  });

  return <div className="cards-container">{renderCard}</div>;
};

export default ProjectCard;
