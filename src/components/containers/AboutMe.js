import React from 'react';
import { Facebook, Email, GitHub, LinkedIn } from '@material-ui/icons';

const AboutMe = () => {

    return (
        <div className="d-inline-flex aboutMe">
            <div className="col col-md-6">
                <h3 className="mb2">About me</h3>
                <p className="about-paragraph">
                    My name is Swaraj Rath. I have robust knowledge in creating beautiful, useful, responsive, professional website using best practice accessibility and latest frameworks. I have a high passion for designing technologies and web development. I primarily use React but picking up new frameworks or language isn't a problem for me because I have good knowledge in development of Front-End and Back-End, as well as setting up infrastructure of a project.
                    <br/>I'm currently working in SAP as a Front-End Developer. Professionally for work I use SAP UI5 Frameworks and SAP HANA Database. In this position I have gained professional industry experience, exposure to large data-sets and implementation of application by working with experienced developers.</p>

            </div>
            <div className="contact-div">
                <h3 className="mb2">Contact</h3>
                <div className="d-flex flex-column">
                <a href="https://www.linkedin.com/in/swaraj-rath-9001b0140" target="_blank" rel="noopener noreferrer" className="p-2">
                    <i className="fa fa-fw fa-2x valign-middle"><LinkedIn /></i>
                    <span className="h5 header-font text-primary">LinkedIn</span>
                </a>
                <a href="https://github.com/swarajrath" target="_blank" rel="noopener noreferrer" className="p-2">
                    <i className="fa fa-fw fa-2x valign-middle"><GitHub /></i>
                    <span className="h5 header-font text-primary">GitHub</span>
                </a>
                <a href="https://www.facebook.com/gulalrath" target="_blank" rel="noopener noreferrer" className="p-2">
                    <i className="fa fa-fw fa-2x valign-middle"><Facebook /></i>
                    <span className="h5 header-font text-primary">Facebook</span>
                </a>
                <a href="mailto:swarajrath007@gmail.com?Subject=Support" className="p-2">
                    <i className="fa fa-fw fa-2x valign-middle"><Email /></i>
                    <span className="h5 header-font text-primary">Email</span>
                </a>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;
