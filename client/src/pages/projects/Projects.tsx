import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom';


interface ProjectsProps {

}

enum CurrentProjects {
    IT = "IT",
    NOVA = "nova",
    SHIVA = "shiva",
    IDEO = "ideo",
    CORRELATION = "correlation"
}

export const Projects: React.FC<ProjectsProps> = ({}) => {
    return (<div>
        HI THIS IS THE PROJECTS PAGE

        <ul>
            {
                Object.values(CurrentProjects).map(project => (
                    <li>
                        <Link to={`/projects/${project}`}>{project}</Link>
                    </li>
                ))
            }
        </ul>
    </div>);
}