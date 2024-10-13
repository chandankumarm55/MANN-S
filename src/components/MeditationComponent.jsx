import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from './Pricing';

// Placeholder images for the Meditation Session
const meditationImages = [
    'https://images.unsplash.com/photo-1529693662653-9d480530a697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVkaXRhdGlvbiUyMGNsYXNzfGVufDB8fDB8fHww',
    'https://media.istockphoto.com/id/884065960/photo/group-meditation.webp?a=1&b=1&s=612x612&w=0&k=20&c=_Mhyx6OQx_fVkpoxhx-WzkU9PIvNdiB3FS5UIuh7xww=',
    'https://img.freepik.com/free-photo/group-people-sitting-lotus-position_1170-220.jpg?size=626&ext=jpg&ga=GA1.1.1341024151.1728134298&semt=ais_hybrid-rr-similar',
];

const MeditationComponent = () => {
    return (
        <div className="container py-4">
            <div className="row align-items-center">
                {/* Image Carousel Section */ }
                <div className="col-lg-6 mb-4">
                    <div id="meditationCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
                        {/* Indicators */ }
                        <ol className="carousel-indicators">
                            { meditationImages.map((_, index) => (
                                <li
                                    key={ index }
                                    data-target="#meditationCarousel"
                                    data-slide-to={ index }
                                    className={ index === 0 ? 'active' : '' }
                                ></li>
                            )) }
                        </ol>

                        {/* Carousel Images */ }
                        <div className="carousel-inner">
                            { meditationImages.map((image, index) => (
                                <div key={ index } className={ `carousel-item ${index === 0 ? 'active' : ''}` }>
                                    <img
                                        src={ image }
                                        className="d-block w-100"
                                        alt={ `Meditation Slide ${index + 1}` }
                                        style={ { borderRadius: '10px' } }
                                    />
                                </div>
                            )) }
                        </div>

                        {/* Controls for next/previous navigation */ }
                        <a
                            className="carousel-control-prev"
                            href="#meditationCarousel"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#meditationCarousel"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                {/* Meditation Class Details Section */ }
                <div className="col-lg-6">
                    <h1 className="text-center text-lg-left">Mann's Meditation Class</h1>
                    <p className="lead text-center text-lg-left">
                        Join our rejuvenating meditation sessions designed to help you find inner peace and balance. Our classes are suitable for all levels, whether you're new to meditation or looking to deepen your practice.
                    </p>
                    <ul className="list-unstyled pl-3">
                        <li>✔ <strong>Guided meditation sessions</strong> to help you relax and unwind</li>
                        <li>✔ <strong>Breathing techniques</strong> to promote calmness and mindfulness</li>
                        <li>✔ <strong>Yoga and movement integration</strong> for a holistic relaxation experience</li>
                        <li>✔ <strong>Stress reduction techniques</strong> for daily life</li>
                        <li>✔ <strong>Focus on mental clarity</strong> and emotional well-being</li>
                    </ul>
                </div>
            </div>

            {/* Pricing Section */ }
            <Pricing />
        </div>
    );
};

export default MeditationComponent;
