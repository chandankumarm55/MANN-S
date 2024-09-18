import React from 'react';
import Navbar from '../components/Navbar';
import AboutUsComponent from '../components/AboutUsComponent';

const About = () => {
    return (
        <div style={ { backgroundColor: "#f2f2f2" } }> {/* Example of a Bootstrap background class */ }
            <Navbar />
            <AboutUsComponent />
        </div>
    );
}

export default About;
