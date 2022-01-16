import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faDog, faCat, faCarrot, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../context/Auth';
import './SideBar.css';

const SideBar = (props) => {
  const { loggedIn } = useAuth();

  return(
    <React.Fragment>
      { loggedIn &&
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
          <FontAwesomeIcon icon={faSkullCrossbones} />&nbsp;barebones
        </div>
        <div className="list-group list-group-flush">
          <Link to="/" className="list-group-item list-group-item-action list-group-item-light p-3">
            <FontAwesomeIcon icon={faHome} />&nbsp;&nbsp;Home
          </Link>
          <Link to="/" className="list-group-item list-group-item-action list-group-item-light p-3">
            <FontAwesomeIcon icon={faDog} />&nbsp;&nbsp;Dogs
          </Link>
          <Link to="/" className="list-group-item list-group-item-action list-group-item-light p-3">
            <FontAwesomeIcon icon={faCat} />&nbsp;&nbsp;Cats
          </Link>
          <Link to="/" className="list-group-item list-group-item-action list-group-item-light p-3">
            <FontAwesomeIcon icon={faCarrot} />&nbsp;&nbsp;Rabbits
          </Link>
        </div>
      </div>
      }
    </React.Fragment>
  )
};

export default SideBar;