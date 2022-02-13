import React from 'react';

export interface Project {
    name: string,
    description: string,
    members: string[],
    isActive: boolean,
}

interface ProjectProps {
    project : Project,
}

const GenericProject: React.FC<ProjectProps> = (props) => {
    
    return (
        <div>
            main page for {props.project.name}
        </div>
           );
};

export default GenericProject;
