import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Timeline} from './pages/timeline/Timeline';
import { Home } from './pages/home/Home';
import { Projects } from './pages/projects/Projects';
import { Navbar } from './Navbar';
import { Project } from './pages/projects/Project';

function App() {

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/timeline" exact component={Timeline} />
            <Route path="/projects" exact component={Projects} />
            <Route path="/projects/:projectid" component={Project} />
            <Route path="/" exact component={Home}/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
