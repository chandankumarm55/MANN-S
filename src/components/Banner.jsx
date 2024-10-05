import React from 'react';
import { motion } from 'framer-motion';
import './banner.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => { // Change the function name to 'Banner'
    const navigate = useNavigate();

    return (
        <motion.div
            className='banner'
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { duration: 1 } }
        >
            <motion.div
                initial={ { opacity: 0, scale: 0.8, rotate: 15, skewY: 10 } }
                animate={ { opacity: 1, scale: 1, rotate: 0, skewY: 0 } }
                transition={ { duration: 0.8, ease: 'easeInOut', delay: 0.2 } }
            >
                <h1>MANN’S</h1>
            </motion.div>

            {/* Paragraph with more complex motion */ }
            <motion.div
                initial={ { x: '-100vw' } }
                animate={ { x: 0 } }
                transition={ { duration: 1, ease: 'easeInOut', delay: 0.4 } }
            >
                <p>
                    DISCOVER THE POWER OF MANN’S IN CREATING A HAPPY AND FULFILLING LIFE.
                    TAKE THE FIRST STEP TOWARDS MENTAL WELL-BEING AND OVERALL HAPPINESS.
                </p>
            </motion.div>

            {/* Buttons with 3D Rotation on hover and complex entrance */ }
            <motion.div
                className='button-group'
                initial={ { opacity: 0, scale: 0.5 } }
                animate={ { opacity: 1, scale: 1 } }
                transition={ { duration: 0.6, ease: 'easeOut', delay: 0.6 } }
            >
                <motion.button
                    className='checkedone'
                    whileHover={ {
                        scale: 1.1,
                        rotate: [0, 10, -10, 0], // 3D rotational effect
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',
                        backgroundColor: '#ff69b4' // Change color on hover
                    } }
                    whileTap={ { scale: 0.95 } }
                    onClick={ () => navigate('/service') }
                >
                    Services
                </motion.button>

                <motion.button
                    className='uncheckedone'
                    whileHover={ {
                        scale: 1.1,
                        rotate: [0, 10, -10, 0],
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.4)',
                        backgroundColor: '#ff69b4'
                    } }
                    whileTap={ { scale: 0.95 } }
                    onClick={ () => navigate('/about') }
                >
                    About Us
                </motion.button>
            </motion.div>
        </motion.div>
    );
}

export default Banner; // Ensure you export the corrected function
