import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import "./Footer.css"; // Assuming you have a CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className='icon-container'>
        <a href="https://github.com/unfazedxx" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} /> 
        </a>
        <a href="https://www.linkedin.com/in/shahkun01/" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} /> 
        </a>
        <a href="https://stackoverflow.com/users/23342617/kunal-shah" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
