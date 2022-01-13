import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import './SideBar.css';

const SideBar = (props) => {
    return(
        <nav id="sidebar" className="active">
        <div className="sidebar-header">
          <FontAwesomeIcon icon={faSkullCrossbones} /> barebones
        </div>
        <ul className="list-unstyled components text-secondary">
          <li><a href="#"><FontAwesomeIcon icon={faCoffee} /> Home</a></li>
        </ul>
      </nav>
    )
};

export default SideBar;