import React from 'react';
import ServiceCardsComponent from '../components/ServiceCard';
import MyNavbar from '../components/Navbar';
import './service.css'; // Import the CSS file

const Service = () => {
    return (
        <div className="service-container">
            <MyNavbar />
            <ServiceCardsComponent />
        </div>
    );
}

export default Service;
