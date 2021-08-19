import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ROUTES from "@statics/routes";
import Timeline from "@pages/Timeline";
import Home from "@pages/Home";
import Project from "@pages/Project";
import Footer from "@components/Footer";
import About from '@pages/About';
import Resources from '@pages/Resources';
import Navbar from "@components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path={ROUTES.TIMELINE} component={Timeline} />
          <Route exact path={ROUTES.PROJECT.PATH} component={Project} />
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route exact path={ROUTES.RESOURCES} component={Resources} />
        </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
