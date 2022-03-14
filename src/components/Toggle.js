import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { ThemeContext } from "../contexts/ThemeContext";

const Toggle = () => {
  const [lightTheme, setLightTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  console.log(lightTheme);

  return (
    <>
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Change Theme"
          onChange={toggleTheme}
        />
      </Form>
    </>
  );
};

export default Toggle;
