import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
    return (
        <Navbar bg="transparent" expand="lg" className="navbar-custom">
            <Navbar.Brand href="#" className="navbar-brand-custom">
                <img src={ logo } width="50" height="50" className="d-inline-block align-top" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav fw-bolder">
                <Nav className="ml-auto gap-4">
                    <Nav.Link href="/" className="fw-bolder fs-4 text-white">Home</Nav.Link>
                    <Nav.Link href="/about" className="fw-bolder fs-4 text-white" >About</Nav.Link>
                    <Nav.Link href="/service" className="fw-bolder fs-4 text-white">Service</Nav.Link>
                    <Nav.Link href="/contact" className="fw-bolder fs-4 text-white">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
