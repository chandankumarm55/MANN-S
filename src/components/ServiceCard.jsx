import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css'; // Import Animate.css for animations

const ServiceCardsComponent = () => {
    const services = [
        {
            title: "Counseling Session",
            description: "Our professional counselors offer personalized one-on-one sessions to help you navigate through life's challenges and achieve mental peace.",
            buttonText: "View More Details",
            buttonLink: "/counseling",
        },
        {
            title: "Dance to Relax",
            description: "Engage in dance therapy sessions designed to release tension, reduce stress, and bring joy and relaxation through movement.",
            buttonText: "View More Details",
            buttonLink: "/dance-to-relax",
        },
        {
            title: "Pet Sessions",
            description: "Experience the calming effect of our pet therapy sessions. Animals provide comfort and emotional support for improving mental well-being.",
            buttonText: "View More Details",
            buttonLink: "/pet-sessions",
        },
        {
            title: "Meditation",
            description: "Join our guided meditation sessions aimed at bringing mindfulness and relaxation, helping you maintain emotional balance.",
            buttonText: "View More Details",
            buttonLink: "/meditation",
        }
    ];

    return (
        <div className="container my-5">
            <div className="row">
                { services.map((service, index) => (
                    <div className="col-md-12 col-lg-6 mb-4" key={ index }>
                        <div className="card shadow-lg h-100 animate__animated animate__fadeInUp" style={ { backgroundColor: '#ffebf0', color: '#333' } }>
                            <div className="card-body">
                                <h3 className="card-title" style={ { color: '#ff69b4' } }>{ service.title }</h3>
                                <p className="card-text">{ service.description }</p>
                                <a href={ service.buttonLink } className="btn btn-outline-dark">
                                    { service.buttonText }
                                </a>
                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </div>
    );
};

export default ServiceCardsComponent;
