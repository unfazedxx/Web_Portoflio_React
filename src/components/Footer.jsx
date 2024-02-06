import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow, FaTwitter } from 'react-icons/fa';
import "./Footer.css"; 

//jsx code for the footer icons, and so they link into a new tab to the respective website when clicked 
const Footer = () => {
  return (
    <footer className="footer">
      <div className='icon-container'>
        {/* github link */}
        <a href="https://github.com/unfazedxx" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FaGithub size={20} /> 
        </a>
        {/* linkedIn link */}
        <a href="https://www.linkedin.com/in/shahkun01/" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={20} /> 
        </a>
        {/* stackoverflow link */}
        <a href="https://stackoverflow.com/users/23342617/kunal-shah" className="icon-link" target="_blank" rel="noopener noreferrer">
          <FaStackOverflow size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
