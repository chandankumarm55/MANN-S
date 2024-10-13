import React, { useState } from 'react';
import './Pricing.css'
// PricingCard Component
const PricingCard = ({ title, price, discountPrice, terms }) => {
    return (
        <div className="card pricing-card mx-2 mb-4 p-2 shadow" style={ { borderRadius: '15px', border: '1px solid #007bff', background: '#f0f8ff' } }>
            <div className="card-body text-center">
                <h5 className="card-title mb-3" style={ { fontSize: '1.8rem', fontWeight: '700', color: '#0056b3' } }>{ title }</h5>
                <p className="card-text flex-row g-2">
                    <span className="text-muted" style={ { textDecoration: 'line-through', fontSize: '1rem' } }>${ price }</span> <br />
                    <strong style={ { fontSize: '2.5rem', color: '#007bff' } }>${ discountPrice }</strong> after discount
                </p>
                <ul className="card-text" style={ { fontSize: '0.95rem', color: '#555', textAlign: 'left', listStyleType: 'disc', paddingLeft: '1.5rem' } }>
                    { terms.map((term, index) => (
                        <li key={ index }>{ term }</li>
                    )) }
                </ul>
                <button className="btn btn-primary mt-3" style={ { width: '100%', borderRadius: '10px', padding: '12px' } }>Get Started</button>
            </div>
        </div>
    );
};
const RegisterForm = ({ onClose }) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Register</h5>
                    <button type="button" className="close" onClick={ onClose }>
                        <span>&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form>
                        {/* Name Input */ }
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
                        </div>

                        {/* Email Input */ }
                        <div className="form-group">
                            <label htmlFor="email">Email address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
                        </div>

                        {/* Phone Number Input */ }
                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" placeholder="Enter your phone number" required />
                        </div>

                        {/* Preferred Event Dropdown */ }
                        <div className="form-group">
                            <label htmlFor="event">Preferred Event</label>
                            <select className="form-control" id="event" required>
                                <option value="">Select an event</option>
                                <option value="dance">Dance to Relax</option>
                                <option value="meditation">Meditation</option>
                                <option value="session">Per Session</option>
                                <option value="counseling">Counseling</option>
                            </select>
                        </div>

                        {/* Preferred Date Input */ }
                        <div className="form-group">
                            <label htmlFor="date">Preferred Date of Joining</label>
                            <input type="date" className="form-control" id="date" required />
                        </div>

                        {/* Submit Button */ }
                        <button type="submit" className="btn btn-primary mt-3" style={ { width: '100%' } }>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};



const Pricing = () => {
    const [isRegisterFormOpen, setIsRegisterFormOpen] = useState(false);

    const openRegisterForm = () => {
        setIsRegisterFormOpen(true);
    };

    const closeRegisterForm = () => {
        setIsRegisterFormOpen(false);
    };

    return (
        <div style={ { backgroundColor: '#eef2f7', padding: '60px 0' } }>
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 style={ { color: '#333', fontWeight: '700', marginBottom: '40px' } }>Choose Your Plan</h2>
                    </div>
                    {/* Per Month Package */ }
                    <div className="col-md-6">
                        <PricingCard
                            title="Per Month"
                            price="150"
                            discountPrice="120"
                            terms={ [
                                "No refunds",
                                "Cancel anytime",
                                "5% off on next month if renewed within the first 7 days"
                            ] }
                        />
                    </div>

                    {/* Yearly Package */ }
                    <div className="col-md-6">
                        <PricingCard
                            title="Yearly"
                            price="1800"
                            discountPrice="1300"
                            terms={ [
                                "No refunds",
                                "Early access to new features",
                                "20% off on next renewal if renewed within the first month"
                            ] }
                        />
                    </div>
                </div>

                <div className="row mt-4 text-center">
                    <div className="col-12">
                        <button
                            className="btn btn-success btn-lg"
                            onClick={ openRegisterForm }
                            style={ { width: '220px', borderRadius: '10px', padding: '16px' } }
                        >
                            Register Now
                        </button>
                    </div>
                </div>
            </div>

            { isRegisterFormOpen && <RegisterForm onClose={ closeRegisterForm } /> }
        </div>
    );
};

export default Pricing;
