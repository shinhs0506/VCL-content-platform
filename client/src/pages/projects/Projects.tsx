import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useRouteMatch} from 'react-router-dom';
import { IT } from './IT/IT';
import { Nova } from './nova/Nova';


interface ProjectsProps {

}

export const Projects: React.FC<ProjectsProps> = ({}) => {
    let match = useRouteMatch();
    return (<div>
        HI THIS IS THE PROJECTS PAGE

        <ul>
        <li>
            <Link to={`${match.url}/IT`}>IT</Link>
        </li>
        <li>
            <Link to={`${match.url}/nova`}>NOVA</Link>
        </li>
        </ul>
        <Switch>
        <Route path={`${match.url}/IT`}>
            <IT />
        </Route>
        <Route path={`${match.url}/nova`}>
            <Nova />
        </Route>
        </Switch>
    </div>);
}