import React, { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContext";
import {
  BsLightbulbFill,
  BsLightbulb,
  BsLightbulbOff,
  BsLightbulbOffFill,
} from "react-icons/bs";

import "./Toggle.Style.css";

// If lightTheme = true, switchState = false

const Toggle = () => {
  const [lightTheme, setLightTheme] = useContext(ThemeContext);
  const [switchState, setSwitchState] = useState(false);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
    localStorage.setItem("lightTheme", !lightTheme);
    localStorage.setItem("switchState", !switchState);
    lightTheme ? setSwitchState(false) : setSwitchState(true);
  };

  useEffect(() => {
    localStorage.getItem("lightTheme");
    localStorage.lightTheme === "true"
      ? setLightTheme(true)
      : setLightTheme(false);

    localStorage.getItem("switchState");
    localStorage.switchState === "true"
      ? setSwitchState(true)
      : setSwitchState(false);
  }, []);

  return (
    <div>
      <Form>
        <div className="toggle-container">
          <div>{!lightTheme ? <BsLightbulbFill /> : <BsLightbulb />}</div>
          <Form.Check
            type="switch"
            id="custom-switch"
            onChange={toggleTheme}
            checked={switchState}
          />
          <div>
            {!lightTheme ? <BsLightbulbOffFill /> : <BsLightbulbOff />}{" "}
          </div>
        </div>
      </Form>
    </div>
  );
};

export default Toggle;
