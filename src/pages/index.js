import * as React from "react";
import Landing from "../components/subpages/Landing";
import Projects from "../components/subpages/Projects";
import About from "../components/subpages/About";
import Contact from "../components/subpages/Contact";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { ThemeContextProvider } from "../contexts/ThemeContext";

import "../globalStyles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const IndexPage = () => {
  return (
    <ThemeContextProvider>
      <div className="app">
        <Navigation />
        <Landing />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
};

export default IndexPage;
