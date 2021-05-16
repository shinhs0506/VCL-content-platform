import React from 'react';
import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {Timeline} from './pages/timeline/Timeline';
import { Home } from './pages/home/Home';
import { Projects } from './pages/projects/Projects';
import { GenericButton } from './generic/GenericButton';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Testing - DOCUMENTATION WEB APP
        </p>
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/timeline">Timeline</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
          </ul>
          <Switch>
            <Route path="/timeline">
              <Timeline />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <GenericButton text="Create" type="create"/>
      </header>
    </div>
  );
}

export default App;
