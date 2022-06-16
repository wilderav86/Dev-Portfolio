import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import AnimateButton from "../animations/animateButton";
import "../components/subpages/Contact.Style.css";

const ContactForm = () => {
  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  const formTitle = "GET IN TOUCH";

  return (
    <div className="form-container">
      <h1 className="form-title page-title accent-color">{formTitle}</h1>

      <form
        className="ui-form"
        name="contact"
        method="post"
        data-netlify="true"
      >
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
          <input
            className="form-box"
            type="text"
            id="name"
            name="name"
            required
          />
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
          <input
            className="form-box"
            type="email"
            id="email"
            name="email"
            required
          />
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
          <textarea
            className="form-box"
            id="message"
            name="message"
            required
          ></textarea>
        </p>
        <div className="contact-button-container">
          <AnimateButton>
            <input className="form-button" type="submit" value="Send" />
          </AnimateButton>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
