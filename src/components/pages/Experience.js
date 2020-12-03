import React, { useState } from 'react';
import './Experience.scss';


const Experience = () => {
  const [showdetails, setshowdetails] = useState(true)
  const [showproject, setshowproject] = useState(true)
  // var accItem = document.getElementsByClassName('accordionItem');
  // var accHD = document.getElementsByClassName('accordionItemHeading');
  // for (var i = 0; i < accHD.length; i++) {
  //     accHD[i].addEventListener('click', toggleItem, false);
  // }
  // function toggleItem() {
  //     var itemClass = this.parentNode.className;
  //     for (i = 0; i < accItem.length; i++) {
  //         accItem[i].className = 'accordionItem close';
  //     }
  //     if (itemClass === 'accordionItem close') {
  //         this.parentNode.className = 'accordionItem open';
  //     }
  // }

  return (
    <div className="experience">
      <div className="d-flex justify-content-center mt-4 mb-4">
        <h1>Experience</h1>
      </div>
      <div className={showdetails ? "accordionItem open" : "accordionItem close"}
        onClick={() => setshowdetails(!showdetails)}>
        <h3 className="accordionItemHeading">Working Student - SAP, Walldorf</h3>
        <div className="accordionItemContent">
          <h4>From: 07.01.2020 - To: Currently Working</h4>
          <h3>Projects</h3>
          <ul>
            <li><p><b>CEI Analytics: </b> Its Overview Page application for graphical representation of CEI data to make customer experience smoother
            by showing the project they have participated in analytical format using SAP Analytics Cloud. Also, I have created several
            Analytical List Pages for more detailed insight into the projects. This whole project is designed with SAP UI5, SAP HANA and OData Service</p></li>
            <li><p><b>CIW Task Manager: </b>I have personally created this application by using the power of SAP UI5, HANA, OData Service for CIW team to better manage,
            provide comments and check status of responsibilities inside our team. It reduces the effort of a manager inside a team to assign responsibility within a team.</p></li>
            <li><p><b>CC/CIS Session Owner: </b></p>A responsive SAP UI5 web application for customers to view the projects they have participated in and download detail list of all their projects
            in an excel sheet. I have partially worked in this application for better performance and efficiency.</li>
          </ul>
        </div>
      </div>

      <div className={showproject ? "accordionItem close" : "accordionItem open"}
        onClick={() => setshowproject(!showproject)}>
        <h3 className="accordionItemHeading">Master Thesis - SRH, Heidelberg</h3>
        <div className="accordionItemContent">
          <h4>From: 01.10.2020 - To: 31.03.2021</h4>
          <h3>User Interface for older adults in healthcare industry</h3>
          <p>The use of mHealth application is rapidly growing in recent years. mHealth(Mobile Health) are very popular among younger generation,
            but the application developer failed to attract older adults as their end user of the healthcare application. So I am creating a mHealth application
            which could be used both by diverse age groups. Using React Native I am creating a mobile application which could be be controlled through voice command that might 
            help get rid of complex navigations and helps older adults to a great extent.
          </p>
        </div>
      </div>
    
    </div>
  )


}

export default Experience
