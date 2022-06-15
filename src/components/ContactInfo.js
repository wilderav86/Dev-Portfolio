import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ContactInfo = () => {
  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  return (
    <div className="info-container">
      <h2 className="page-title accent-color">EMAIL</h2>
      <h2 className={!lightTheme ? "light-text" : "dark-text"}>
        wilderav86@gmail.com
      </h2>
    </div>
  );
};

export default ContactInfo;
