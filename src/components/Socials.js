import React, { useContext } from "react";
import Adam_Wilder_Resume from "../CV/Adam_Wilder_Resume.pdf";
import { ThemeContext } from "../contexts/ThemeContext";
import Cv from "../assets/cv.svg";

import "./Socials.Style.css";
import { IconContext } from "react-icons";
import AnimateButton from "../animations/animateButton";

const Socials = () => {
  const [lightTheme] = useContext(ThemeContext);

  return (
    <div className="socials-container">
      <AnimateButton>
        <a
          href="https://www.linkedin.com/in/adam-wilder-8928381a6/"
          target="_blank"
        >
          <div className="svg-container">
            <svg
              className={!lightTheme ? "neon-button light" : "neon-button dark"}
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="70px"
              height="70px"
            >
              <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 16 12 C 14.35499 12 13 13.35499 13 15 C 13 16.64501 14.35499 18 16 18 C 17.64501 18 19 16.64501 19 15 C 19 13.35499 17.64501 12 16 12 z M 16 14 C 16.564129 14 17 14.435871 17 15 C 17 15.564129 16.564129 16 16 16 C 15.435871 16 15 15.564129 15 15 C 15 14.435871 15.435871 14 16 14 z M 14 19 A 1.0001 1.0001 0 0 0 13 20 L 13 35 A 1.0001 1.0001 0 0 0 14 36 L 18 36 A 1.0001 1.0001 0 0 0 19 35 L 19 20 A 1.0001 1.0001 0 0 0 18 19 L 14 19 z M 22 19 A 1.0001 1.0001 0 0 0 21 20 L 21 35 A 1.0001 1.0001 0 0 0 22 36 L 26 36 A 1.0001 1.0001 0 0 0 27 35 L 27 27.5 C 27 26.120455 28.120455 25 29.5 25 C 30.879545 25 32 26.120455 32 27.5 L 32 30 L 32 35 A 1.0001 1.0001 0 0 0 33 36 L 37 36 A 1.0001 1.0001 0 0 0 38 35 L 38 26.5 C 38 22.36961 34.63039 19 30.5 19 C 29.213528 19 28.059744 19.41615 27 19.990234 A 1.0001 1.0001 0 0 0 26 19 L 22 19 z M 15 21 L 17 21 L 17 34 L 15 34 L 15 21 z M 23 21 L 25 21 L 25 21.816406 A 1.0001 1.0001 0 0 0 26.693359 22.537109 C 27.684186 21.585305 29.016683 21 30.5 21 C 33.54961 21 36 23.45039 36 26.5 L 36 34 L 34 34 L 34 30 L 34 27.5 C 34 25.029545 31.970455 23 29.5 23 C 27.029545 23 25 25.029545 25 27.5 L 25 34 L 23 34 L 23 21 z" />
            </svg>
            {/* {lightTheme && <div className="underglow" />} */}
          </div>
        </a>
      </AnimateButton>
      <AnimateButton>
        <a
          href="https://github.com/wilderav86?tab=repositories"
          target="_blank"
        >
          <div className="svg-container">
            <svg
              className={!lightTheme ? "neon-button light" : "neon-button dark"}
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 64 64"
              width="70px"
              height="70px"
            >
              <path d="M32,6C17.641,6,6,17.641,6,32c0,12.277,8.512,22.56,19.955,25.286c-0.592-0.141-1.179-0.299-1.755-0.479V50.85 c0,0-0.975,0.325-2.275,0.325c-3.637,0-5.148-3.245-5.525-4.875c-0.229-0.993-0.827-1.934-1.469-2.509 c-0.767-0.684-1.126-0.686-1.131-0.92c-0.01-0.491,0.658-0.471,0.975-0.471c1.625,0,2.857,1.729,3.429,2.623 c1.417,2.207,2.938,2.577,3.721,2.577c0.975,0,1.817-0.146,2.397-0.426c0.268-1.888,1.108-3.57,2.478-4.774 c-6.097-1.219-10.4-4.716-10.4-10.4c0-2.928,1.175-5.619,3.133-7.792C19.333,23.641,19,22.494,19,20.625 c0-1.235,0.086-2.751,0.65-4.225c0,0,3.708,0.026,7.205,3.338C28.469,19.268,30.196,19,32,19s3.531,0.268,5.145,0.738 c3.497-3.312,7.205-3.338,7.205-3.338c0.567,1.474,0.65,2.99,0.65,4.225c0,2.015-0.268,3.19-0.432,3.697 C46.466,26.475,47.6,29.124,47.6,32c0,5.684-4.303,9.181-10.4,10.4c1.628,1.43,2.6,3.513,2.6,5.85v8.557 c-0.576,0.181-1.162,0.338-1.755,0.479C49.488,54.56,58,44.277,58,32C58,17.641,46.359,6,32,6z" />
              <path d="M33.813,57.93C33.214,57.972,32.61,58,32,58C32.61,58,33.213,57.971,33.813,57.93z" />
              <path d="M37.786,57.346c-1.164,0.265-2.357,0.451-3.575,0.554C35.429,57.797,36.622,57.61,37.786,57.346z" />
              <path d="M32,58c-0.61,0-1.214-0.028-1.813-0.07C30.787,57.971,31.39,58,32,58z" />
              <path d="M29.788,57.9c-1.217-0.103-2.411-0.289-3.574-0.554C27.378,57.61,28.571,57.797,29.788,57.9z" />
            </svg>
            {/* {lightTheme && <div className="underglow" />} */}
          </div>
        </a>
      </AnimateButton>
      <AnimateButton>
        <a href={Adam_Wilder_Resume} target="_blank">
          <div className="svg-container">
            <Cv
              size={80}
              className={!lightTheme ? "neon-button light" : "neon-button dark"}
            />
          </div>
          {/* {lightTheme && <div className="underglow" />} */}
        </a>
      </AnimateButton>
    </div>
  );
};

export default Socials;
