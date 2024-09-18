import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Importing Animate.css for animations

const ContactUsComponent = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8"> {/* Adjusted grid for 1 col on small and 2 cols on larger screens */ }
                    <div className="card shadow-lg p-4 animate__animated animate__fadeInUp" style={ { backgroundColor: '#ffebf0', color: '#333' } }>
                        <h2 className="text-center mb-4" style={ { color: '#ff69b4' } }>Contact Us</h2>
                        <p className="text-center fs-5">Join our community and start your journey to a healthier mind and happier life.</p>
                        <div className="text-center">
                            <p><strong>Email:</strong> manns@gmail.com</p>
                            <p><strong>Phone:</strong> 80736683799</p>
                            <p><strong>Office:</strong> Kudlu Gate, 2nd Phase, Bangalore</p>
                        </div>
                        <h3 className="text-center mt-4" style={ { color: '#ff69b4' } }>Follow Us</h3>
                        <p className="text-center fs-5">Follow us on social media for daily inspiration and updates.</p>
                        <div className="text-center mt-3">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-dark">
                                <i className="fab fa-facebook-f fs-4"></i>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-dark">
                                <i className="fab fa-instagram fs-4"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2 text-dark">
                                <i className="fab fa-twitter fs-4"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUsComponent;
