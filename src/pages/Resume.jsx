import resume from "./assets/resume.png"
import "./Resume.css"


export default function Resume() {
  return (
    <div className="resumePageAlignment">
      <h1>Resume</h1>
      <div className="centeredContent">
        {/* img of resume */}
        <img className="resumeImg" src={resume} alt="Resume" />
      </div>
      {/* download link for resume (google drive) */}
      <div className="centeredContent">
        <a href="https://drive.google.com/file/d/1BKj2oVIgWEGr5wPUgV1239elwcv7vPgk/view?usp=sharing" target="_blank" rel="noopener noreferrer" download>
          Download Resume
        </a>
      </div>
    </div>
  );
}
