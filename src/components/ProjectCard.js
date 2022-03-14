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

  console.log(data.allMarkdownRemark.nodes);

  const renderCard = data.allMarkdownRemark.nodes.map((card, id) => {
    console.log(card);
    const { title, link, gitLink, description } = card.frontmatter;
    const projectImg = card.frontmatter.image.childImageSharp.gatsbyImageData;

    return (
      <Card
        bg={lightTheme ? "light" : "dark"}
        text={lightTheme ? "dark" : "light"}
        key={id}
        className="project-card"
      >
        <div>
          <Card.Header as="h5">{title}</Card.Header>
          <Card.Body>
            <GatsbyImage image={projectImg} alt="project image" />
            <div>
              <Card.Text>{description}</Card.Text>
            </div>

            <div className="button-container">
              <IconContext.Provider value={{ size: 40 }}>
                {lightTheme ? <BsFileCodeFill /> : <BsFileCode />}
              </IconContext.Provider>

              <Button variant={lightTheme ? "outline-dark" : "outline-light"}>
                View Site
              </Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    );
  });

  return <>{renderCard}</>;
};

export default ProjectCard;
