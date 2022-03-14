import * as React from "react";
import Landing from "../components/subpages/Landing";
import Projects from "../components/subpages/Projects";
import About from "../components/subpages/About";
import Contact from "../components/subpages/Contact";
import Navigation from "../components/Navigation";
import { ThemeContextProvider } from "../contexts/ThemeContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globalStyles.css";

const IndexPage = () => {
  return (
    <ThemeContextProvider>
      <div className="app">
        <Navigation />
        <Landing />
        <Projects />
        <About />
        <Contact />
      </div>
    </ThemeContextProvider>
  );
};

export default IndexPage;
