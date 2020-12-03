import React from "react";
import '../../Styles/skills.scss';
import SAPLogo from '../../images/sap-logo.png';



const Skills = () => (
  <div>
    <section className="content-section text-white text-center">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-warning mb-0">Skillsets</h3>
          <h2 className="mb-5">Things I know</h2>
        </div>
        <div className="row">

          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="fab fa-react" />
            </span>
            <h4><strong>Front-End Development</strong></h4>
            <p className="text-faded mb-0">Creating the website with unique designs.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="fas fa-database" />
            </span>
            <h4><strong>Back-End Development</strong></h4>
            <p className="text-faded mb-0">Server side programming</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i><img alt="SAP" style={{height: "71%", width: "64%", margin: "0 0 11px 5px"}} src={SAPLogo} /></i>
            </span>
            <h4><strong>SAP Development</strong></h4>
            <p className="text-faded mb-0">Developing SAP Web application using Fiori and HANA</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="fas fa-mobile" />
            </span>
            <h4><strong>Mobile App Development</strong></h4>
            <p className="text-faded mb-0">Using React Native to build efficient web application</p>
          </div>

        </div>
      </div>
    </section>
  </div>
);
export default Skills;
