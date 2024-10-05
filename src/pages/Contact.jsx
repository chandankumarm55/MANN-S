import React from 'react';
import MyNavbar from '../components/Navbar';
import ContactUsComponent from '../components/ContactUsComponent';
import './Contact.css'; // Import the CSS for background and styling

const Contact = () => {
    return (
        < div className='contact-background'> {/* Full-page background for Contact */ }
            <MyNavbar />
            <ContactUsComponent />
        </div>
    );
}

export default Contact;
