import React, { useState, useEffect } from 'react';
import "./Sponsor.css";

const Sponsor = ({ image, name }) => {
    const [isActive, setIsActive] = useState(false);

    const handleScroll = () => {
        if (isElementInViewport()) {
            setIsActive(true);
        }
    };

    const isElementInViewport = () => {
        const element = document.querySelector('.sponsor-container');
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sponsor-container ${isActive ? 'active' : ''}`}>
            <div className='sponsor-data'>
                <img src={image} alt={name} className="sponsor-image" />
                <p className="sponsor-name">{name}</p>
            </div>

        </div>
    );
};

export default Sponsor;

