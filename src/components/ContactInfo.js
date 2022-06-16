import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ContactInfo = () => {
  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  return (
    <div className="info-container">
      <h2 className="email-title accent-color">EMAIL</h2>
      <h3 className={!lightTheme ? "light-text email" : "dark-text email"}>
        wilderav86@gmail.com
      </h3>
    </div>
  );
};

export default ContactInfo;
