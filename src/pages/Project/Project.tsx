import React from 'react'
import { RouteComponentProps } from 'react-router';

//TODO: refactor Project page to use a Project generic component for displaying project content

interface MatchParams {
    projectid: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const Project: React.FC<ProjectProps> = ({match}) => {

        return (<div>
            PROJECT! {match.params.projectid}
        </div>);
}

export default Project