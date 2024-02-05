import "./Portfolio.css"
import React from 'react';
// importing the images for the projects to later be used 
import mingo from "./assets/mingo.png";
import textEditor from "./assets/text.png"
import noteTaker from "./assets/NoteTaker.png"
import scheduler from "./assets/schedule.png"
import multipleChoice from "./assets/quiz.jpeg"
import password from "./assets/password.png"
export default function Portfolio() {

  //array of project objects 
  const projects = [
    {
      title: 'Mingo Dating App',
      description: 'This is a dating website where the user can connect with others, find events in the area, and find other users who enjoy the same hobbies. The goal is to get people outside and meeitng one another, than only online. For testing purposes use: janedoe@gmail.com, password:1234567',
      link: 'https://min-go-dating-app-617b3295d223.herokuapp.com/',
      image: mingo,
      github: "https://github.com/unfazedxx/Min-Go-Dating-App",
    },
    {
      title: 'Text Editor',
      description: 'A text editor which uses progressive web applications to allow for online and offline use. The user also has the ability to download a desktop version of the app.',
      link: 'https://text-editor-wpoy.onrender.com/ ',
      image: textEditor,
      github: "https://github.com/unfazedxx/Text_editor"
    },
    {
      title: 'Note Taker',
      description: 'A note taking application using Express.js. This web app allows the user to create notes, save, as well as delete the note from their list.',
      link: 'https://note-taker-z2k7.onrender.com/notes',
      image: noteTaker,
      github: " https://github.com/unfazedxx/Note_Taking_App_ExpressJS",
    },
    {
      title: 'Daily Scheduler',
      description: 'A daily task scheduler, for each hour of the day. The user can add, update and save their tasks based on the specific time, and have easy acecss to it on the go.',
      link: 'https://unfazedxx.github.io/daily_scheduler_/ ',
      image: scheduler,
      github: "https://github.com/unfazedxx/daily_scheduler"
    },
    {
      title: 'Coding Quiz',
      description: 'A coding quiz which implements HTML, CSS and Javascript. This quiz has a count down timer, question prompts and an option to save your score using local storage.',
      link: ' https://unfazedxx.github.io/multiple-choice-quiz/ ',
      image: multipleChoice,
      github: "https://github.com/unfazedxx/multiple-choice-quiz"
    },
    {
      title: 'Password Generator',
      description: 'A password generator application where the user is prompted for specifc items they would like to include in their password.',
      link: 'https://unfazedxx.github.io/Online_Random_Password_Generator/ ',
      image: password,
      github: "https://github.com/unfazedxx/Online_Random_Password_Generator"
    },
  ];

  //calling the array items for display on the page

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