import React from 'react';
import './Navbar.scss';
import logo from '../../images/logo.svg';

const Navbar = () => {
    return (
        <div className="Navbar">
            <img className="logo" alt="Logo" src={logo}></img>
            <nav>
                <ul className="nav__links">
                    <li><a href='/home'>Skills</a></li>
                    <li><a href='/services'>Projects</a></li>
                    <li><a href='/about'>Acheivement</a></li>
                    <li><a href='/about'>Experience</a></li>
                    <li><a href='/about'>About</a></li>
                </ul>
            </nav>
            <button className="cta">Contact</button>
        </div>
    )
}

export default Navbar
