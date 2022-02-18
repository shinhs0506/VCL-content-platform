import React from 'react'
import { RouteComponentProps } from 'react-router';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import { TEXT } from '@statics'
import { OverviewPage, ProjectPage } from './'
import { Project } from '@entities/Project'

interface MatchParams {
    project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const Main: React.FC<ProjectProps> = ({match}) => {
    const projects = useAppSelector(selectProjects); 

    const curr_project: Project | undefined = projects.find(project => project.name === match.params.project_id)
    
    const isOverviewPage: boolean = match.params.project_id === TEXT.PAGE_TITLES.OVERVIEW.toLowerCase();

    return isOverviewPage ? <OverviewPage projects={projects}/> : 
        curr_project !== undefined ? <ProjectPage project={curr_project}/> :
        <div> Undefined Project Page</div>;
}

export default Main
