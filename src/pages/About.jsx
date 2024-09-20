import React from 'react';
import Navbar from '../components/Navbar';
import AboutUsComponent from '../components/AboutUsComponent';
import './About.css'; // Import the updated CSS for the background

const About = () => {
    return (
        <div className='about-background'>

            <Navbar />
            <div className="content-wrapper">
                {/* Content-wrapper will center the card content */ }
                <AboutUsComponent />
            </div>
        </div>
    );
}

export default About;
