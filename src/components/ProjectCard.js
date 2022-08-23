import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContext";
import { BsFileCodeFill, BsFileCode } from "react-icons/bs";
import { IconContext } from "react-icons";

import "./ProjectCard.Style.css";
import AnimateButton from "../animations/animateButton";

const ProjectCard = () => {
  const data = useStaticQuery(graphql`
    query projectCardQuery {
      allMarkdownRemark(
        filter: { frontmatter: { section: { eq: "projects" } } }
        sort: { fields: id }
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
    console.log(card);
    return (
      <Card
        bg={lightTheme ? "dark" : "light"}
        text={lightTheme ? "light" : "dark"}
        key={id}
        className="project-card"
      >
        <Card.Header as="h5" className="page-title accent-color">
          {title}
        </Card.Header>
        <Card.Body>
          <GatsbyImage image={projectImg} alt="project image" />
          <div>
            <Card.Text className="card-text">{description}</Card.Text>
          </div>

          <div className="button-container">
            <div>
              <AnimateButton>
                <AnimateButton>
                  <a href={gitLink} className="site-link">
                    <Button
                      type="button"
                      // href={gitLink}
                      variant={lightTheme ? "outline-light" : "outline-dark"}
                      whitespace="normal"
                    >
                      View Code
                    </Button>
                  </a>
                </AnimateButton>
              </AnimateButton>
            </div>

            <div>
              <AnimateButton>
                <a href={link} className="site-link">
                  <Button
                    type="button"
                    // href={gitLink}
                    variant={lightTheme ? "outline-light" : "outline-dark"}
                    whitespace="normal"
                  >
                    View Site
                  </Button>
                </a>
              </AnimateButton>
            </div>
          </div>
        </Card.Body>
      </Card>
    );
  });

  return <div className="cards-container">{renderCard}</div>;
};

export default ProjectCard;
