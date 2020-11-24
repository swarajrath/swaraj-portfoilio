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
      <div className={showdetails ? "accordionItem open" : "accordionItem close"}
        onClick={() => setshowdetails(!showdetails)}>
        <h2 className="accordionItemHeading">SAP, Walldorf</h2>
        <div className="accordionItemContent">
          <p>SAP is bad. but good</p>
          <p>Its in germany</p>
        </div>
      </div>

      <div className={showproject ? "accordionItem close" : "accordionItem open"}
        onClick={() => setshowproject(!showproject)}>
        <h2 className="accordionItemHeading">Master Thesis</h2>
        <div className="accordionItemContent">
          <p>SRH Heidelberg</p>
          <p>It not good</p>
          <ul>
            <li>List item #1</li>
            <li>List item #2</li>
            <li>List item #3</li>
          </ul>
        </div>
      </div>
    </div>
  )


}

export default Experience
