import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Import Animate.css for animations
import { motion } from 'framer-motion'; // Import Framer Motion
import './ContactUsComponent.css'; // Import custom CSS for blur effect

const ContactUsComponent = () => {
    // Framer Motion animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const iconVariants = {
        hover: { scale: 1.3, rotate: 15, transition: { duration: 0.3 } },
    };

    return (
        <motion.div
            className="container"
            initial="hidden"
            animate="visible"
            variants={ cardVariants }
        >
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <motion.div className="card shadow-lg p-4 blur-background animate__animated animate__fadeInUp">
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
                            {/* Social Media Icons with Motion Effects */ }
                            { ["facebook-f", "instagram", "twitter", "linkedin", "github", "youtube"].map((icon, index) => (
                                <motion.a
                                    key={ index }
                                    href={ `https://${icon}.com` }
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mx-2 text-dark"
                                    whileHover="hover"
                                    variants={ iconVariants }
                                >
                                    <i className={ `fab fa-${icon} fs-4` }></i>
                                </motion.a>
                            )) }
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactUsComponent;
