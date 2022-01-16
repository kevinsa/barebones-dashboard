import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../context/Auth';
import './TopNavBar.css';

const TopNavBar = (props) => {
    const navigate = useNavigate();
    const { logout, loggedIn, user } = useAuth();

    const handleLogout = () => {
      logout().then(() => {
        navigate("/login")
      });
    };

    const onSideToggle = () => {
      props.handleSideToggle();
    };

    return (
      <Navbar bg="light" expand="lg">
        <Container>
          { loggedIn &&
          <button className="btn btn-light" id="sidebarToggle" onClick={onSideToggle}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          }
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              { loggedIn &&
              <NavDropdown title={user.email} id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="profile">Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>logout</NavDropdown.Item>
              </NavDropdown>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};

export default TopNavBar;