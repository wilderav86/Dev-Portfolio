import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ContactInfo = () => {
  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  return (
    <div className="info-container">
      <h4 className="email-title accent-color">EMAIL</h4>
      <h5 className={!lightTheme ? "light-text email" : "dark-text email"}>
        wilderav86@gmail.com
      </h5>
    </div>
  );
};

export default ContactInfo;
