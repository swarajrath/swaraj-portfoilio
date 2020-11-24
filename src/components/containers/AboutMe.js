import React from 'react';
import { AccessAlarm } from '@material-ui/icons';

const AboutMe = () => {

    return (
        <div className="d-inline-flex aboutMe">
            <div className="col col-md-6">
                <h3 className="mb2">About me</h3>
                <p className="about-paragraph">
                    Yevgeniy (Jim) Brikman loves programming, writing, speaking, traveling, and lifting heavy things. He does not
                    love talking about himself in the 3rd person. He is the co-founder of Gruntwork, a company that provides
                    DevOps as a Service. He's also the author of two books published by O'Reilly Media:
                    Hello, Startup and Terraform: Up and Running. Previously, he spent more than a decade building infrastructure and products that
                    served hundreds of millions of users while working as a software engineer at LinkedIn, TripAdvisor, Cisco Systems, and Thomson
                    Financial. For more info, check out his writing , speaking,
                    projects , and photos. </p>

            </div>
            <div className="contact-div">
                <h3 className="mb2">Contact</h3>
                <div className="d-flex flex-column">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2">
                    <i className="fa fa-fw fa-2x valign-middle"><AccessAlarm /></i>
                    <span className="h5 header-font">Twitter</span>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2">
                    <i className="fa fa-fw fa-2x valign-middle"><AccessAlarm /></i>
                    <span className="h5 header-font">Facebook</span>
                </a>
                <a href="https://github.com.com" target="_blank" rel="noopener noreferrer" className="p-2">
                    <i className="fa fa-fw fa-2x valign-middle"><AccessAlarm /></i>
                    <span className="h5 header-font">Github</span>
                </a>
                <a href="https://gmail.com" target="_blank" rel="noopener noreferrer" className="p-2">
                    <i className="fa fa-fw fa-2x valign-middle"><AccessAlarm /></i>
                    <span className="h5 header-font">Email</span>
                </a>
                </div>
            </div>
        </div>

    )
}

export default AboutMe;
