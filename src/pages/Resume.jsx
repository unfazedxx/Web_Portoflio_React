import resume from "./assets/resume02:2024.png"
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
        <a href="https://drive.google.com/file/d/1IMpwDSc_qlbRR90JahTK_jC4kWXA7ZHz/view?usp=drive_link" target="_blank" rel="noopener noreferrer" download>
          Download Resume
        </a>
      </div>
    </div>
  );
}
