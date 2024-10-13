import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from './Pricing';

// Placeholder images for the Dance To Relax event
const danceToRelaxImages = [
    'https://media.istockphoto.com/id/1170865144/photo/professional-dancer-class-dancing-in-dancing-studio.jpg?s=612x612&w=0&k=20&c=ksAj-b-pF_RBDC9R4AdMJMq7rSLUUayCcQ1XaujtSC0=',
    'https://media.istockphoto.com/id/1134374655/photo/fitness-class-fun.jpg?s=612x612&w=0&k=20&c=jbeY_l1W3XqB5trOcKuzXG8_7Rn159mjCajLT0q9Jf0=',
    'https://media.istockphoto.com/id/1319913278/photo/young-adult-people-training-in-dance-studio.jpg?s=612x612&w=0&k=20&c=GGG59V5zGt0g6DZNTBpSL895-2EAPUKcu2tvOJyyd90=',
];

const DaceToRelaxComponent = () => {
    return (
        <div className="container py-4">
            <div className="row align-items-center">
                {/* Image Carousel Section */ }
                <div className="col-lg-6 mb-4">
                    <div id="danceToRelaxCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
                        {/* Indicators */ }
                        <ol className="carousel-indicators">
                            { danceToRelaxImages.map((_, index) => (
                                <li
                                    key={ index }
                                    data-target="#danceToRelaxCarousel"
                                    data-slide-to={ index }
                                    className={ index === 0 ? 'active' : '' }
                                ></li>
                            )) }
                        </ol>

                        {/* Carousel Images */ }
                        <div className="carousel-inner">
                            { danceToRelaxImages.map((image, index) => (
                                <div key={ index } className={ `carousel-item ${index === 0 ? 'active' : ''}` }>
                                    <img
                                        src={ image }
                                        className="d-block w-100"
                                        alt={ `Dance To Relax Slide ${index + 1}` }
                                        style={ { borderRadius: '10px' } }
                                    />
                                </div>
                            )) }
                        </div>

                        {/* Controls for next/previous navigation */ }
                        <a
                            className="carousel-control-prev"
                            href="#danceToRelaxCarousel"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#danceToRelaxCarousel"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                {/* Dance To Relax Event Details Section */ }
                <div className="col-lg-6">
                    <h1 className="text-center text-lg-left">Mann's Dance To Relax Event</h1>
                    <p className="lead text-center text-lg-left">
                        Join us for a transformative Dance To Relax event where professional therapists will guide you through relaxation, mindfulness, and stress relief using dance movements.
                    </p>
                    <ul className="list-unstyled pl-3">
                        <li>✔ <strong>Guided dance sessions</strong> to help reduce stress and anxiety</li>
                        <li>✔ <strong>Mindfulness through movement</strong> led by experts</li>
                        <li>✔ <strong>Group sessions</strong> to encourage shared experiences</li>
                        <li>✔ <strong>Relaxing and uplifting music</strong> for a serene atmosphere</li>
                        <li>✔ <strong>Open for all skill levels</strong>, no dance experience required</li>
                    </ul>
                </div>
            </div>

            {/* Pricing Section */ }
            <Pricing />
        </div>
    );
};

export default DaceToRelaxComponent;
