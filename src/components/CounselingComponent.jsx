import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from './Pricing';

// Dummy images for slider
const counselingImages = [
    'https://plus.unsplash.com/premium_photo-1668613402936-98ce515c5cc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y291bnNlbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
    'https://images.pexels.com/photos/935977/pexels-photo-935977.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://media.istockphoto.com/id/1822947641/photo/mother-smiles-proudly-at-her-daughter-after-telling-the-therapist-how-much-she-loves-her.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZEV0PybXmlhRiJzZ9uzCkT6SFeLterLn4beAO11J0wY=',
];

const CounselingComponent = () => {
    return (
        <div className="container py-4">
            <div className="row align-items-center">
                {/* Image Carousel Section */ }
                <div className="col-lg-6 mb-4">
                    <div id="counselingCarousel" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            { counselingImages.map((_, index) => (
                                <li
                                    key={ index }
                                    data-target="#counselingCarousel"
                                    data-slide-to={ index }
                                    className={ index === 0 ? 'active' : '' }
                                ></li>
                            )) }
                        </ol>
                        <div className="carousel-inner">
                            { counselingImages.map((image, index) => (
                                <div key={ index } className={ `carousel-item ${index === 0 ? 'active' : ''}` }>
                                    <img
                                        src={ image }
                                        className="d-block w-100"
                                        alt={ `Counseling Slide ${index + 1}` }
                                        style={ { borderRadius: '10px' } }
                                    />
                                </div>
                            )) }
                        </div>
                        <a
                            className="carousel-control-prev"
                            href="#counselingCarousel"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#counselingCarousel"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                {/* Counseling Details Section */ }
                <div className="col-lg-6">
                    <h1 className="text-center text-lg-left">Mann's Counseling Sessions</h1>
                    <p className="lead text-center text-lg-left">
                        Join our professional counseling sessions led by certified therapists specializing in stress,
                        anxiety, relationship issues, and personal growth.
                    </p>
                    <ul className="list-unstyled pl-3">
                        <li>✔ <strong>Personalized one-on-one sessions</strong> for tailored solutions</li>
                        <li>✔ <strong>Group therapy</strong> options available for collaborative healing</li>
                        <li>✔ <strong>Experienced and certified counselors</strong> to guide you</li>
                        <li>✔ <strong>Flexible session timings</strong> that fit your schedule</li>
                        <li>✔ <strong>Confidential and supportive environment</strong> to ensure comfort</li>
                    </ul>
                </div>
            </div>

            {/* Pricing Section */ }
            <Pricing />
        </div>
    );
};

export default CounselingComponent;
