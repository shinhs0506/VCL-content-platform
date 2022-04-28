import React from 'react';
import { Project } from '@entities/Project'
import ProjectBreadcrumbs from '@components/ProjectBreadcrumbs'
import { TEXT } from '@statics'

interface ProjectProps {
    project : Project,
}

const ProjectTeam: React.FC<ProjectProps> = (props) => {
    return (
        <div>
            <ProjectBreadcrumbs project_name={props.project.name} page_name={TEXT.PROJECT_NAV.TEAM} /> 
            team page for {props.project.name};
        </div>
    )
};

export default ProjectTeam;

