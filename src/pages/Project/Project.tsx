import React, {useEffect} from 'react'
import { RouteComponentProps } from 'react-router';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';

//TODO: refactor Project page to use a Project generic component for displaying project content

interface MatchParams {
    projectid: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const Project: React.FC<ProjectProps> = ({match}) => {
    const projects = useAppSelector(selectProjects); 

    console.log(projects)

        return (
        <div>
            PROJECT! {match.params.projectid}
            <ul>
            {projects.map((p, i) => {
                return <li key={i}>{p.name}</li>
            })} 
            </ul>
        </div>
        );
}

export default Project
