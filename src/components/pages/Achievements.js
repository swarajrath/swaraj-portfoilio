import React from 'react';
import './Achievements.scss';
import FrontEndWeb from '../../images/Front-End Web.jpg';
import FrontEndWeb2 from '../../images/Front End Web.jpg';
import ServerSideDevelopment from '../../images/ServerSideDevelopment.jpg';
import CoreJava from '../../images/Java-Certificate.jpg';
import PHP from '../../images/PHP-Certificate.jpg';
import ABAP from '../../images/ABAP-Certificate.jpg';


const Achievements = () => {
	return (
		<div>
			<section id="timeline">
				<h1>A Flexbox Timeline</h1>
				<p className="leader">All cards must be the same height and width for space calculations on large screens.</p>
				<div className="demo-card-wrapper">

					<div className="demo-card demo-card--step4">
						<div className="head">
							<div className="number-box">
								<span>10/2019</span>
							</div>
							<h2><span className="small">Udemy</span>Node JS, express and Mongo DB</h2>
						</div>
						<div className="body">
							<img src={ServerSideDevelopment} alt="Graphic" style={{height: "290px"}} />
						</div>
					</div>

					<div className="demo-card demo-card--step1">
						<div className="head">
							<div className="number-box">
								<span>10/20</span>
							</div>
							<h2><span className="small">Coursera</span>Front-End web development with React</h2>
						</div>
						<div className="body">
							<img src={FrontEndWeb2} alt="Graphic" style={{height: "290px"}} />
						</div>
					</div>

					<div className="demo-card demo-card--step2">
						<div className="head">
							<div className="number-box">
								<span>09/2019</span>
							</div>
							<h2><span className="small">Coursera</span>Front-End Web UI frameworks and tools</h2>
						</div>
						<div className="body">
							<img src={FrontEndWeb} alt="Graphic" style={{height: "290px"}} />
						</div>
					</div>

					<div className="demo-card demo-card--step3">
						<div className="head">
							<div className="number-box">
								<span>05/2018</span>
							</div>
							<h2><span className="small">Reliance Global Service</span>SAP ABAP</h2>
						</div>
						<div className="body">
							<img src={ABAP} alt="Graphic" style={{height: "290px"}} />
						</div>
					</div>

					<div className="demo-card demo-card--step4">
						<div className="head">
							<div className="number-box">
								<span>07/2017</span>
							</div>
							<h2><span className="small">LIT, Bhubaneswar</span>PHP</h2>
						</div>
						<div className="body">
							<img src={PHP} alt="Graphic" style={{height: "290px"}} />
						</div>
					</div>

					<div className="demo-card demo-card--step5">
						<div className="head">
							<div className="number-box">
								<span>07/2016</span>
							</div>
							<h2><span className="small">LIT, Bhubaneswar</span>Core Java</h2>
						</div>
						<div className="body">
							<img src={CoreJava} alt="Graphic" style={{height: "290px"}} />
						</div>
					</div>

				</div>
			</section>
		</div>
	)
}

export default Achievements
