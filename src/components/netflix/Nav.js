import React, { useEffect, useState } from 'react';
import './netflix.css';
import netflixLogo from '../../resource/images/Netflix_Logo_RGB.png';

const Nav = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);
    return (
        <div className={`nav ${show && 'nav_black'}`}>
            <img className="nav-logo" src={netflixLogo} alt="Netflix Logo" />
            <img
                className="nav-avator"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />
            {/* <div> */}
            <a href="/" className="netflix-goback">
                <h2 className="netflix-goback-text">Main</h2>
                <img
                    className="netflix-goback-img"
                    alt="goback"
                    src="https://image.flaticon.com/icons/png/512/13/13964.png"
                />
            </a>
            {/* </div> */}
        </div>
    );
};

export default Nav;
