import React from 'react';
import './App.scss';
import Navbar from './components/Navigation/Navbar';
import Home from './components/pages/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "semantic-ui-css/semantic.min.css";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Skills from './components/pages/Skills';
import Projects from './components/pages/Projects';
import Achievements from './components/pages/Achievements';
import Experience from './components/pages/Experience';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/skills' component={Skills} />
          <Route exact path='/projects' component={Projects} />
          <Route path="/achievements" component={Achievements} />
          <Route path="/experience" component={Experience} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
