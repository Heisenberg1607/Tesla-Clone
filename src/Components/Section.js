import React from "react";

import "./index.css";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftButton,
  rightButton,
  backgroundImage,
}) {
  return (
    <>
      <div
        className="section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Fade bottom>
          <div className="model-name">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </Fade>
        <Fade bottom>
          <div className="buttons">
            <div class="ButtonGroup">
              <button class="leftButton">{leftButton}</button>
              {rightButton && (
                <button className="rightButton">{rightButton} </button>
              )}
            </div>

            <div className="arrow">v</div>
          </div>
        </Fade>
      </div>
    </>
  );
}

export default Section;
