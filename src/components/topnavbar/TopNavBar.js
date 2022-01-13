import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import useAuth from '../../context/Auth';
import './TopNavBar.css';

const TopNavBar = (props) => {
    const navigate = useNavigate();
    const { logout, loggedIn, user } = useAuth();

    const handleLogout = () => {
      logout().then(() => {
        navigate("/login")
      });
    }
    return (
        <Navbar bg="white" expand="lg">
            <Nav className="container-fluid">    
              { loggedIn &&
              <NavDropdown title={user.email} id="user-dropdown" className="ms-auto">
                <NavDropdown.Item>
                  <Link to="profile">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>logout</NavDropdown.Item>
              </NavDropdown>
              }
            </Nav>
        </Navbar>
    )
};

export default TopNavBar;