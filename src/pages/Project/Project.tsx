import React from 'react'
import { RouteComponentProps } from 'react-router';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';

//TODO: refactor Project page to use a Project generic component for displaying project content

interface MatchParams {
    project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const Project: React.FC<ProjectProps> = ({match}) => {
    const projects = useAppSelector(selectProjects); 

    return (
    <div>
        this is {match.params.project_id} page
        <ul>
        {projects.map((p, i) => {
            return <li key={i}>{p.name}</li>
        })} 
        </ul>
    </div>
    );
}

export default Project
