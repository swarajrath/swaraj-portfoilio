import React from 'react';
import './Skills.scss';
import HTML from '../../images/HTML-logo.png';
import CSS from '../../images/CSS-logo.png';
import JavaScript from '../../images/Javascript-logo.png';
import ReactJS from '../../images/React-logo.png';
import NodeJS from '../../images/node-js-logo.webp';
import Express from '../../images/Expressjs.png';
import SAPHANA from '../../images/sap-hana-logo.jpg';
import SAPUI5 from '../../images/UI5-logo.png';
import MySQL from '../../images/MySQL_logo.svg';
import MongoDB from '../../images/MongoDB-Logo.png';
import Bootstrap from '../../images/bootstrap-logo.png';
import Fiori from '../../images/fiori2.png';
import ReactNative from '../../images/react-native.png';


const Skills = () => {
    return (
        <div>
            <div className="front-end">
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column w-50 p-3 m-5">
                        <h1>My Skillsets</h1>
                        <p className="skill-paragraph">Getting things on the web is hard. Getting them to look great is even harder. A combination of design and technical expertise are both required to get the job done right. I’ve honed my skills to deliver the best experience, where it be on a desktop computer or a smartphone. These are my weapons of choice.</p>
                        <p className="skill-paragraph">ce.</p>
                    </div>
                    <div className="frontend-skills">
                        <div className="d-flex flex-column">
                            <div className="d-flex justify-content-around">
                                <div className=""><img src={HTML} alt="HTML" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">HTML5</h4>
                                </div>
                                <div className=""><img src={CSS} alt="CSS" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">CSS</h4>
                                </div>
                                <div className=""><img src={JavaScript} alt="JavaScript" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">JavaScript</h4>
                                </div>
                                <div className=""><img src={ReactJS} alt="ReactJS" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">React</h4>
                                </div>
                                <div className=""><img src={ReactNative} alt="ReactJS" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">React Native</h4>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-4">
                            <div className="d-flex justify-content-around">
                            
                                <div className=""><img src={MongoDB} alt="ReactJS" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">MongoDB</h4>
                                </div>
                                <div className=""><img src={Bootstrap} alt="ReactJS" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">Bootstrap</h4>
                                </div>
                                <div className=""><img src={NodeJS} alt="HTML" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">NodeJS</h4>
                                </div>
                                <div className=""><img src={Express} alt="CSS" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">Express</h4>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column mt-4">
                            <div className="d-flex justify-content-around">
                                <div className=""><img src={SAPUI5} alt="JavaScript" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">SAP UI5</h4>
                                </div>
                                <div className=""><img src={MySQL} alt="ReactJS" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">SQL</h4>
                                </div>
                                <div className=""><img src={SAPHANA} alt="JavaScript" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">SAP HANA</h4>
                                </div>
                                <div className=""><img src={Fiori} alt="JavaScript" style={{ width: "7rem", height: "7rem" }} />
                                    <h4 className="text-center">SAP Fiori</h4>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
