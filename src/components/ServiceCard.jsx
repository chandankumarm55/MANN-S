import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Import Animate.css for animations
import { motion } from 'framer-motion'; // Import Framer Motion
import Counseling from './coun.jpg'

const ServiceCardsComponent = () => {
    const services = [
        {
            title: "Counseling Session",
            description: "Our professional counselors offer personalized one-on-one sessions to help you navigate through life's challenges and achieve mental peace.",
            buttonText: "View More Details",
            buttonLink: "/counseling",
            backgroundImage: Counseling,
        },
        {
            title: "Dance to Relax",
            description: "Engage in dance therapy sessions designed to release tension, reduce stress, and bring joy and relaxation through movement.",
            buttonText: "View More Details",
            buttonLink: "/dance-to-relax",
            backgroundImage: "https://png.pngtree.com/thumb_back/fh260/background/20210225/pngtree-people-on-the-dance-floor-light-effect-dance-silhouette-background-image_566726.jpg"
        },
        {
            title: "Pet Sessions",
            description: "Experience the calming effect of our pet therapy sessions. Animals provide comfort and emotional support for improving mental well-being.",
            buttonText: "View More Details",
            buttonLink: "/pet-sessions",
            backgroundImage: "https://www.petparadise.com/files/4859/Pet_Paradise_Dog_Zoom_Image.jpg"
        },
        {
            title: "Meditation",
            description: "Join our guided meditation sessions aimed at bringing mindfulness and relaxation, helping you maintain emotional balance.",
            buttonText: "View More Details",
            buttonLink: "/meditation",
            backgroundImage: "https://png.pngtree.com/background/20230613/original/pngtree-meditation-picture-image_3375016.jpg"
        }
    ];

    return (
        <div className="container my-5">
            <div className="row">
                { services.map((service, index) => (
                    <motion.div
                        className="col-md-12 col-lg-6 mb-4"
                        key={ index }
                        whileHover={ { scale: 1.05, boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)" } } // Hover animation
                        initial={ { opacity: 0, y: 30 } }
                        whileInView={ { opacity: 1, y: 0 } } // Reveal animation when card scrolls into view
                        viewport={ { once: true } }
                        transition={ { duration: 0.6, delay: index * 0.2 } }
                    >
                        <div className="card shadow-lg h-100" style={ {
                            backgroundImage: `url(${service.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            position: 'relative',
                        } }>
                            {/* Adding an overlay for better text visibility */ }
                            <div className="overlay" style={ {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                zIndex: 1
                            } }></div>

                            <div className="card-body" style={ { position: 'relative', zIndex: 2, color: '#fff' } }>
                                <h3 className="card-title" style={ { color: '#c23b73', fontWeight: "bolder" } }>{ service.title }</h3>
                                <p className="card-text">{ service.description }</p>
                                <motion.a
                                    href={ service.buttonLink }
                                    className="btn btn-outline-light"
                                    whileHover={ {
                                        scale: 1.1,
                                        backgroundColor: '#ff69b4',
                                        color: '#fff'
                                    } } // Button hover animation
                                    transition={ { duration: 0.3 } }
                                >
                                    { service.buttonText }
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                )) }
            </div>
        </div>
    );
};

export default ServiceCardsComponent;
