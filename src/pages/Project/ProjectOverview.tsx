import React from 'react'
import { Project } from '@entities/Project'
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import GenericLink from '@components/generics/Link'
import { ROUTES } from '@statics';

interface OverviewParams {
    projects: Project[];
}

const ProjectOverview: React.FC<OverviewParams> = (props) => {
    const projects = useAppSelector(selectProjects); 

    return (
        <div>
            <div>
                All Projects
            </div>
            <div>
                {projects.map((project, i) => {
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

export default ProjectOverview;

