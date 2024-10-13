import React, { useState } from 'react';
import './RegisterForm.css'; // Import the CSS for z-index styling

const RegisterForm = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button className="btn btn-primary" onClick={ toggleDialog }>
                Register
            </button>

            { isOpen && (
                <div className="modal-overlay">
                    <div className="modal-dialog">
                        <div className="modal-header">
                            <h5 className="modal-title">Register</h5>
                            <button className="close" onClick={ toggleDialog }>
                                &times;
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" className="form-control" id="username" placeholder="Enter username" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Password" />
                                </div>
                                <button type="submit" className="btn btn-success btn-block">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            ) }
        </div>
    );
};

export default RegisterForm;
