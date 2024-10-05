import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'; // Import useLocation from react-router-dom
import logo from '../images/whitelogo.png';
import pinkLogo from '../images/logo.png'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
    const location = useLocation(); // Get current route location
    const isHomeRoute = location.pathname === '/'; // Check if the current route is the home route

    // Define styles based on the route
    const navbarBgColor = isHomeRoute ? 'transparent' : '#ff69b4'; // White theme for home, pink for other pages
    const linkColor = isHomeRoute ? 'text-white' : 'text-white'; // White links for home, dark text for others

    return (
        <Navbar bg="transparent" expand="lg" className="navbar-custom pr-2" style={ { backgroundColor: navbarBgColor } }>
            <Navbar.Brand href="/" className="navbar-brand-custom">
                <img src={ isHomeRoute ? logo : pinkLogo } width="50" height="50" className="d-inline-block align-top" alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='text-white bg-white' />
            <Navbar.Collapse id="basic-navbar-nav fw-bolder" className='text-white ' >
                <Nav className="ml-auto gap-4">
                    <Nav.Link href="/" className={ `fw-bolder fs-4 ${linkColor}` }>Home</Nav.Link>
                    <Nav.Link href="/about" className={ `fw-bolder fs-4 ${linkColor}` }>About</Nav.Link>
                    <Nav.Link href="/service" className={ `fw-bolder fs-4 ${linkColor}` }>Service</Nav.Link>
                    <Nav.Link href="/contact" className={ `fw-bolder fs-4 ${linkColor}` }>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MyNavbar;
