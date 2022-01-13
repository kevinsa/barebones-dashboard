import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDog, faCat, faCarrot, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../context/Auth';
import './SideBar.css';

const SideBar = (props) => {
  const { loggedIn } = useAuth();

  return(
    <Fragment>
      { loggedIn &&
        <nav id="sidebar" className="active">
          <div className="sidebar-header">
            <Link to="/">
              <div className="brand">
              <FontAwesomeIcon icon={faSkullCrossbones} /> barebones
              </div>
            </Link>
          </div>
          
          <ul className="list-unstyled components text-secondary">
            <li><Link to="/"><FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Home</Link></li>
            <li><Link to="/"><FontAwesomeIcon icon={faDog} />&nbsp;&nbsp;Dogs</Link></li>
            <li><Link to="/"><FontAwesomeIcon icon={faCat} />&nbsp;&nbsp;Cats</Link></li>
            <li><Link to="/"><FontAwesomeIcon icon={faCarrot} />&nbsp;&nbsp;Rabbits</Link></li>
          </ul>
        </nav>
      }
    </Fragment>
      
  )
};

export default SideBar;