import "./Portfolio.css"
import React from 'react';
import mingo from "./assets/mingo.png";
import textEditor from "./assets/texteditor.jpeg"
import noteTaker from "./assets/NoteTaker.png"
import scheduler from "./assets/scheduler.png"
import multipleChoice from "./assets/multchoice.png"
import password from "./assets/password.png"
export default function Portfolio() {
  const projects = [
    {
      title: 'Mingo Dating App',
      description: 'A simplified dating app. For testing purposes use: janedoe@gmail.com, password:1234567',
      link: 'https://min-go-dating-app-617b3295d223.herokuapp.com/',
      image: mingo,
      github: "https://github.com/bahossdev/Min-Go-Dating-App",
    },
    {
      title: 'Text Editor',
      description: 'A text editor which uses PWAs.',
      link: 'https://text-editor-wpoy.onrender.com/ ',
      image: textEditor,
      github: "https://github.com/unfazedxx/Text_editor"
    },
    {
      title: 'Note Taker',
      description: 'A note taking application which uses Express.js',
      link: 'https://note-taker-z2k7.onrender.com/notes',
      image: noteTaker,
      github: " https://github.com/unfazedxx/Note_Taking_App_ExpressJS",
    },
    {
      title: 'Daily Scheduler',
      description: 'A text editor which uses PWAs.',
      link: 'https://unfazedxx.github.io/daily_scheduler_/ ',
      image: scheduler,
      github: "https://github.com/unfazedxx/daily_scheduler"
    },
    {
      title: 'Coding Quiz',
      description: 'A text editor which uses PWAs.',
      link: ' https://unfazedxx.github.io/multiple-choice-quiz/ ',
      image: multipleChoice,
      github: "https://github.com/unfazedxx/multiple-choice-quiz"
    },
    {
      title: 'Password Generator',
      description: 'A text editor which uses PWAs.',
      link: 'https://unfazedxx.github.io/Online_Random_Password_Generator/ ',
      image: password,
      github: "https://github.com/unfazedxx/Online_Random_Password_Generator"
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div>
              <h2>{project.title}</h2>
              <div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img src={project.image} alt={project.title} className="portfolioImgs" />
                </a>
              </div>
              <p>{project.description} <a href={project.github} target="_blank" rel="noopener noreferrer">(GitHub Repository)</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
  }