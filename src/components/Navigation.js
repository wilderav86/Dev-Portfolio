import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Nav, Navbar, Container } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";
import Toggle from "./Toggle";

import "./Nav.Style.css";

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query navQuery {
      site {
        siteMetadata {
          subPages {
            id
            page
          }
        }
      }
    }
  `);

  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  //data
  const { subPages } = data.site.siteMetadata;

  //render variables
  const message = lightTheme ? "lighter" : "darker";

  const renderSubPages = subPages.map((subPage) => {
    const { id, page } = subPage;

    return (
      <Nav.Link href={id} key={id} className="page-links">
        {page}
      </Nav.Link>
    );
  });

  //

  return (
    <Navbar
      collapseOnSelect
      bg={lightTheme ? "dark" : "light"}
      variant={lightTheme ? "dark" : "light"}
      expand="md"
      fixed="top"
    >
      <Container fluid className="nav-container">
        {/* <div className="nav-container">
            <div className="drop-down"> */}

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            {renderSubPages}
          </Nav>
          <Navbar.Text>
            <div className="toggle-text-container">
              <div className="chunk-container">
                <p
                  className={
                    lightTheme ? "text-chunk light" : "text-chunk dark"
                  }
                >
                  for a
                </p>
                <p
                  className={
                    lightTheme
                      ? "text-chunk light color"
                      : "text-chunk dark color"
                  }
                >
                  <strong>{`${message}`}</strong>
                </p>
                <p
                  className={
                    lightTheme ? "text-chunk light" : "text-chunk dark"
                  }
                >
                  mood, press
                </p>
              </div>

              <Toggle />
            </div>
          </Navbar.Text>
        </Navbar.Collapse>

        {/* </div>
          </div> */}
      </Container>
    </Navbar>
  );
};

export default Navigation;
