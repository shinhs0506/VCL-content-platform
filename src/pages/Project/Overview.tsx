import React from 'react'
import { Project } from '@components/generics/Project/Project'
import GenericLink from '@components/generics/Link'
import { ROUTES } from '@statics';

interface OverviewParams {
    projects: Project[];
}

const Overview: React.FC<OverviewParams> = (project) => {

    return (
        <div>
            <div>
                All Projects
            </div>
            <div>
                {project.projects.map((project, i) => {
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

export default Overview;

