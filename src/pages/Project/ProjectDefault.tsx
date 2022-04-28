import React from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { TEXT } from '@statics'

interface ProjectProps {
    project : Project,
}

const ProjectDefault: React.FC<ProjectProps> = (props) => {
    return (
        <div>
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.PROJECT_DESCRIPTION} /> 
            main page for {props.project.name};
        </div>
    )
};

export default ProjectDefault;
