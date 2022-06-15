import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ContactForm = () => {
  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  const formTitle = "GET IN TOUCH";

  return (
    <div className="ui raised very padded text container segment">
      <div className="form-container">
        <h1 className="form-title page-title accent-color">{formTitle}</h1>
        <form className="ui form" name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label
              className={
                !lightTheme ? "light-text page-body" : "dark-text page-body"
              }
              htmlFor="name"
            >
              Name
            </label>{" "}
            <br />
            <input type="text" id="name" name="name" required />
          </p>
          <p>
            <label
              className={
                !lightTheme ? "light-text page-body" : "dark-text page-body"
              }
              htmlFor="email"
            >
              Email
            </label>{" "}
            <br />
            <input type="email" id="email" name="email" required />
          </p>
          <p>
            <label
              className={
                !lightTheme ? "light-text page-body" : "dark-text page-body"
              }
              htmlFor="message"
            >
              Message
            </label>{" "}
            <br />
            <textarea id="message" name="message" required></textarea>
          </p>
          <p>
            <input type="submit" value="Send" />
          </p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
