import React from 'react'
import { Project } from '@entities/Project'
import GenericLink from '@components/generics/Link'
import { ROUTES } from '@statics';

interface OverviewParams {
    projects: Project[];
}

const OverviewPage: React.FC<OverviewParams> = (props) => {
    console.log(props);

    return (
        <div>
            <div>
                All Projects
            </div>
            <div>
                {props.projects.map((project, i) => {
                    return (
                        <li key={i}>
                            <GenericLink name={project.name} 
                                        to={`${ROUTES.PROJECT.BASE}/${project.name}`}/>
                        </li>
                    )
                })}
            </div>
        </div>
           )
}

export default OverviewPage;

