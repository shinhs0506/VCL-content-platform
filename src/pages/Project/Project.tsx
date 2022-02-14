import React from 'react'
import { RouteComponentProps } from 'react-router';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import { TEXT } from '@statics'
import Overview from './Overview'
import GenericProject from '@components/generics/Project/Project'
import { Project } from '@components/generics/Project/Project'

//TODO: refactor Project page to use a Project generic component for displaying project content

interface MatchParams {
    project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const ProjectPage: React.FC<ProjectProps> = ({match}) => {
    const projects = useAppSelector(selectProjects); 
    const project_names = ['a', 'b', 'c'];
    const test_project = {
        name: 'test project',
        description: 'test desc',
        members: ['m1', 'm2'],
        isActive: true,
    }

    const curr_project: Project | undefined = projects.find(project => project.name === match.params.project_id)
    
    const isOverviewPage: boolean = match.params.project_id === TEXT.PAGE_TITLES.OVERVIEW.toLowerCase();

    return isOverviewPage ? <Overview projects={projects}/> : 
        curr_project !== undefined ? <GenericProject project={curr_project}/> :
        <div> Undefined Project Page</div>;
}

export default ProjectPage
