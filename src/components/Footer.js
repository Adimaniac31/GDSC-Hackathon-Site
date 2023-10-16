import React from 'react';
import './Footer.css'; // Create a corresponding CSS file for styling
import gdsc from "../assets/gdsc-logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <div className="logo-container">
                            <img
                                src={gdsc}
                                alt="GDSC Logo"
                                className="gdsc-logo"
                            />
                        </div>
                        <h3>About GDSC</h3>
                        <p>
                            Google Developer Student Clubs (GDSC) is a community for
                            developers to learn, share, and grow together.
                        </p>
                    </div>
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">Events</a>
                            </li>
                            <li>
                                <a href="#">Projects</a>
                            </li>
                            <li>
                                <a href="#">Team</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Contact Us</h3>
                        <p>
                            <strong>Email:</strong> info@gdscexample.com
                        </p>
                        <p>
                            <strong>Address:</strong> Survey No. 140 - 141/1, Off, Adilabad - Nagpur Rd, Waranga, Maharashtra 441108
                        </p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&#169; {new Date().getFullYear} GDSC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
