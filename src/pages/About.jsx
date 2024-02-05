import React from "react";
import "./About.css";
import selfPortrait from "./assets/selfPortrait.png";

export default function About() {
  return (
    <div className="page-container">
      <div className="title-container">
        <h1>About Page</h1>
      </div>
      <div className="about-container">
        <div className="portraitContainer">
          {/* using image we imported from line 1 */}
          <img className="selfPortrait" src={selfPortrait} alt="selfPortrait" />
        </div>
        <div className="about-text">
          {/* about me info */}
          <p>
            Hey there! I'm Kunal, a versatile full-stack developer passionate about crafting dynamic web solutions. With expertise in JavaScript, React, and MySQL, I love bringing innovative ideas to life. Drawing from my background in finance, real estate, and sales, I offer a unique perspective to each project, ensuring both functionality and strategic value. Let's collaborate and create something extraordinary!
          </p>
        </div>
      </div>
    </div>
  );
}
