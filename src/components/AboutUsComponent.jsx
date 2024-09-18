import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutUsComponent.css'; // Import the custom CSS file for animations and styles

const AboutUsComponent = () => {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card shadow-lg">
                        <div className="card-body p-5 about-card" style={ { backgroundColor: '#ffe4e1', color: '#333' } }>
                            <h2 className="text-center mb-4 animated-heading" style={ { color: '#ff69b4' } }>About Mann's</h2>
                            <p className="text-justify animated-text">
                                At Mann’s, we believe in empowering individuals to lead peaceful and fulfilling lives. Our center is dedicated to mental well-being, offering personalized counseling sessions, meditation, dance therapy, and even pet therapy. Experience the power of holistic healing all in one place.
                            </p>
                            <h3 className="text-center mt-5 animated-heading" style={ { color: '#ff69b4' } }>Our Vision</h3>
                            <p className="text-justify animated-text">
                                Our vision is to create a peaceful environment where individuals can reconnect with their inner selves. We offer a range of services like meditation, dance therapy, and counseling to help people find balance and happiness in their lives.
                            </p>
                            <h3 className="text-center mt-5 animated-heading" style={ { color: '#ff69b4' } }>Who We Are</h3>
                            <p className="text-justify animated-text">
                                Mann’s is a center designed to promote mental peace and well-being through unique and tailored services like counseling, meditation, dance relaxation, and pet therapy. We aim to guide you on your journey toward emotional balance and inner peace.
                            </p>
                            <h3 className="text-center mt-5 animated-heading" style={ { color: '#ff69b4' } }>Our Mission</h3>
                            <p className="text-justify animated-text">
                                Our mission is simple – to provide a space for healing and growth. Through counseling, meditation, and creative therapies, we help you navigate life’s challenges and achieve mental peace.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUsComponent;
