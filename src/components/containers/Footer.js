import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <ul className="foote_bottom_ul_amrc">
                        <li><a href="/">Home</a></li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/achievements">Achievement</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                    <p className="text-center text-white">Copyright @2020 | Designed by <a href="http://www.swarajrath.live">Swaraj Rath</a></p>
                    <ul className="social_footer_ul">
                        <li><a href="http://webenlance.com"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="http://webenlance.com"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="http://webenlance.com"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="http://webenlance.com"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>

            </footer>
        </div>
    )
}

export default Footer
