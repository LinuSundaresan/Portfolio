import React, { useState } from 'react';

import './navbar.css';

const Navbar = () => {

    const [isMobile, setIsMobile] = useState(false);


    return (
        <>
        <nav className="navbar">
            <h3 className="logo">Linu </h3>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <li><a href="#home"><i className='fa fa-home nav-icon'></i>Home</a></li>
                <li><a href="#about"><i className='fa fa-user nav-icon'></i>About</a></li>
                <li><a href="#services"> <i className='fa fa-wrench nav-icon'></i>Services</a></li>
                <li><a href="#portfolio"><i className='fa fa-briefcase nav-icon'></i>Portfolio</a></li>
                <li><a href="#blog"><i className='fas fa-blog nav-icon'></i>Blog</a></li>
                <li><a href="#contact"><i className='fa fa-phone nav-icon'></i>Contact</a></li>
            </ul>
            <div className="nav-icons">
                <button className="theme-toggle">🌙</button>
                <button className="cta-button">Let's Talk</button>
            </div>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <>&#10005;</> : <>&#9776;</>}
            </button>
            </nav>
        </>
    )
};

export default Navbar;