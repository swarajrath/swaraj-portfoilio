import React from 'react';
import './Navbar.scss';
// import logo from '../../images/swaraj.png';

const Navbar = () => {
    return (
        <div className="Navbar">
            <a href='/'><h1 className="logo-header">SWARAJ</h1></a>
            <nav>
                <ul className="nav__links">
                    <li><a href='/skills'>Skills</a></li>
                    <li><a href='/projects'>Projects</a></li>
                    <li><a href='/achievements'>Acheivement</a></li>
                    <li><a href='/experience'>Experience</a></li>
                </ul>
            </nav>
            <a className="cta" href='/contact'>Contact</a>
        </div>
    )
}

export default Navbar
