import selfPortrait from "./assets/selfPortrait.png";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <div className="about-container">
        <div className="portraitContainer">
          {/* using image we imported from line 1 */}
          <img className="selfPortrait" src={selfPortrait} alt="selfPortrait" />
        </div>
        <div className="about-text">
          {/* about me info */}
          <p>
            Hi there! I'm Kunal, a versatile full-stack developer with a passion for creating dynamic web solutions. With expertise in JavaScript, React, and MySQL, I thrive on bringing innovative ideas to life in the digital realm. Leveraging my background in finance, real estate, and sales, I bring a unique perspective to every project, ensuring not just functionality, but also strategic value. Let's collaborate and build something extraordinary together!"
          </p>
        </div>
      </div>
    </div>
  );
}