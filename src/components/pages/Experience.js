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
        <h1>Professional Experience</h1>
      </div>
      <div className={showdetails ? "accordionItem open" : "accordionItem close"}
        onClick={() => setshowdetails(!showdetails)}>
        <h3 className="accordionItemHeading">Working Student as Application Developer for CIW - SAP, Walldorf</h3>
        <div className="accordionItemContent">
          <h4>From: 07.01.2020 - To: Currently Working</h4>
          <h3>Projects</h3>
          <ul>
            <li className="li_element"><p><b>CEI Analytics: </b> Analytics launchpad built using SAP Analytics Cloud for the CEI team & selected CEI roles. Its productive purpose is to visualize customer project details & provide insights into CEI cycle data. As main developer in the team I was creating several Analytical List Pages, Overview Page Cards, oData services, specific role-based filters for OVPs.</p></li>
            <li className="li_element"><p><b>CIW Task Manager: </b>I have personally created a new application using SAP UI5, HANA, oData Service to manage development and bugfixing tasks across the whole CIW Development Team (backlog) incl the project manager.</p></li>
            <li className="li_element"><p><b>CC/CIS Session Owner: </b>A responsive SAP UI5 application for SAP Session Owners (from SAP’s product area) providing key details on assigned CC/CIS projects. Additionally it allows them to download a more detailed project and improvement requests data into XLS files. I’ve worked in this application to help fixing bugs and improve the UI.</p></li>
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
