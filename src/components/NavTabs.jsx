import { Link, useLocation } from 'react-router-dom';
import "./NavTabs.css"

function NavTabs() {
  const currentPage = useLocation().pathname;

  //code for the navigation bar links to send the user to the desired tab
  return (
    <header>
      <div className='header-content'>
        <div className='logo'>
          Kunal Shah's Web Portfolio
        </div>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link 
              to="/"
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Contact"
              className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Portfolio"
              className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Resume"
              className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
  
}

export default NavTabs;
