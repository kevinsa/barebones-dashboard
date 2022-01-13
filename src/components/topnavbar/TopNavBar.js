import React from 'react';
import { Container, Navbar, Nav, NavDropdown, NavItem, MenuItem, NavbarBrand } from 'react-bootstrap';
import './TopNavBar.css';

const TopNavBar = (props) => {
    return (
        <Navbar bg="white" expand="lg">
            <Nav className="container-fluid">    
              <NavDropdown title="Kevin Saeed" id="user-dropdown" className="ms-auto">
                <NavDropdown.Item href="#">action 1</NavDropdown.Item>
                <NavDropdown.Item href="#">action 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">action 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
        </Navbar>
    )
};

export default TopNavBar;