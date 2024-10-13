import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from './Pricing';

// Placeholder images for the Pet Care Session
const petCareImages = [
    'https://media.istockphoto.com/id/951204834/photo/man-holding-paw-of-the-his-dog.jpg?s=612x612&w=0&k=20&c=CpK_d5-59_0kYd5ISJQnDapP3AoTs3RKilIbt1lG5hM=',
    'https://media.istockphoto.com/id/136237225/photo/german-shepherd-training.jpg?s=612x612&w=0&k=20&c=DFkdc2C6lpyU06wOoZYSxBosG2TxvsOPrwljvoaT-Yg=',
    'https://media.istockphoto.com/id/1290751593/photo/sporty-woman-exercising-at-home.jpg?s=612x612&w=0&k=20&c=m2g7b_Pg1VUSMh70JEOrTpdKjJsXa6vC7hPqjics2Hk=',
];

const PetCareSessionComponent = () => {
    return (
        <div className="container py-4">
            <div className="row align-items-center">
                {/* Image Carousel Section */ }
                <div className="col-lg-6 mb-4">
                    <div id="petCareCarousel" className="carousel slide" data-ride="carousel" data-interval="3000">
                        {/* Indicators */ }
                        <ol className="carousel-indicators">
                            { petCareImages.map((_, index) => (
                                <li
                                    key={ index }
                                    data-target="#petCareCarousel"
                                    data-slide-to={ index }
                                    className={ index === 0 ? 'active' : '' }
                                ></li>
                            )) }
                        </ol>

                        {/* Carousel Images */ }
                        <div className="carousel-inner">
                            { petCareImages.map((image, index) => (
                                <div key={ index } className={ `carousel-item ${index === 0 ? 'active' : ''}` }>
                                    <img
                                        src={ image }
                                        className="d-block w-100"
                                        alt={ `Pet Care Slide ${index + 1}` }
                                        style={ { borderRadius: '10px' } }
                                    />
                                </div>
                            )) }
                        </div>

                        {/* Controls for next/previous navigation */ }
                        <a
                            className="carousel-control-prev"
                            href="#petCareCarousel"
                            role="button"
                            data-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a
                            className="carousel-control-next"
                            href="#petCareCarousel"
                            role="button"
                            data-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                {/* Pet Care Session Details Section */ }
                <div className="col-lg-6">
                    <h1 className="text-center text-lg-left">Mann's Pet Care Session</h1>
                    <p className="lead text-center text-lg-left">
                        Ensure your pets are well taken care of with our professional pet care services. Whether you're away at work or on vacation, we provide reliable and compassionate care for your furry friends.
                    </p>
                    <ul className="list-unstyled pl-3">
                        <li>✔ <strong>Daily pet sitting services</strong> to keep your pets company while you're away</li>
                        <li>✔ <strong>Feeding and walking services</strong> to maintain your pet's routine</li>
                        <li>✔ <strong>Basic training sessions</strong> to teach your pets new skills</li>
                        <li>✔ <strong>Grooming and hygiene maintenance</strong> to keep your pets clean and healthy</li>
                        <li>✔ <strong>Special care for senior pets</strong> and those with medical needs</li>
                    </ul>
                </div>
            </div>

            {/* Pricing Section */ }
            <Pricing />
        </div>
    );
};

export default PetCareSessionComponent;
