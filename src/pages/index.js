import * as React from "react";
import { Helmet } from "react-helmet";
import Landing from "../components/subpages/Landing";
import Projects from "../components/subpages/Projects";
import About from "../components/subpages/About";
import Contact from "../components/subpages/Contact";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import { NavToggleContextProvider } from "../contexts/NavToggleContext";

import "../globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  return (
    <ThemeContextProvider>
      <NavToggleContextProvider>
        <div className="app">
          <Helmet>
            <title>Adam Wilder</title>
            <link rel="canonical" href="http://www.adamwilder.fun" />
          </Helmet>
          <Navigation />
          <Landing />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </NavToggleContextProvider>
    </ThemeContextProvider>
  );
};

export default IndexPage;
