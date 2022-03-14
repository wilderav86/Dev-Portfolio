import React from "react";
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

  const { subPages } = data.site.siteMetadata;

  const renderSubPages = subPages.map((subPage) => {
    const { id, page } = subPage;

    return (
      <Nav.Link href={id} key={id}>
        {page}
      </Nav.Link>
    );
  });

  return (
    <div className="nav-container">
      <Navbar collapseOnSelect bg="none" variant="dark" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              {renderSubPages}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Toggle />
      </Navbar>
    </div>
  );
};

export default Navigation;
