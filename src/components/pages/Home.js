import React, { Component } from 'react';
import Carousal from '../containers/Carousal';
import AboutMe from '../containers/AboutMe';
import Skills from '../containers/Skills';
import '../../Styles/Home.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <Carousal />
        <Skills />
        <AboutMe />
        
      </div>
    )
  }
}

export default Home
