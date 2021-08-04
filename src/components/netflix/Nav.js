import React from 'react';
import './netflix.css';

const Nav = () => {
    return (
        <div className="nav">
            <img
                className="nav-logo"
                src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30"
                alt="Netflix Logo"
            />
            <img
                className="nav-avator"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
            />
            <div style={{ position: 'absolute', left: '30%' }}>
                <a href="/">
                    <img
                        alt="goback"
                        src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-icon%2Fgo-back-arrow_754899.htm&psig=AOvVaw35GAUrHsWZmfwcbCLV4aSp&ust=1628148921977000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIClucntlvICFQAAAAAdAAAAABAP"
                    />
                </a>
            </div>
        </div>
    );
};

export default Nav;
