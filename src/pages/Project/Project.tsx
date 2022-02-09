import React from 'react'
import { RouteComponentProps } from 'react-router';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import { TEXT } from '@statics'
import Overview from './Overview'

//TODO: refactor Project page to use a Project generic component for displaying project content

interface MatchParams {
    project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const Project: React.FC<ProjectProps> = ({match}) => {
    const projects = useAppSelector(selectProjects); 
    const project_names = ['a', 'b', 'c'];
    
    console.log(match.params.project_id)
    console.log(TEXT.PAGE_TITLES.OVERVIEW);

    return match.params.project_id === TEXT.PAGE_TITLES.OVERVIEW ? 
            <Overview project_names={project_names}/> : null;
}

export default Project
