import React from 'react'
import { RouteComponentProps } from 'react-router';

interface MatchParams {
    projectid: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

export const Project: React.FC<ProjectProps> = ({match}) => {

        return (<div>
            PROJECT! {match.params.projectid}
        </div>);
}