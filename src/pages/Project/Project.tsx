import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Project } from '@entities/Project'
import ProjectNavbar from '@components/ProjectNavbar'
import { ToggleButton } from '@mui/material'
import PROJECT_NAV from '@statics/projectNav'
import ROUTES from '@statics/routes'
import './Project.css'

interface MatchParams {
    project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
    project : Project,
}

const ProjectPage: React.FC<ProjectProps> = (props) => {

    console.log(props)
    console.log(props.match)

    // const ref = React.createRef();
    const [ selected, setSelected ] = React.useState(true);
    const expand = selected? '' : 'expand'

    let links: {title: string, ref: string}[] = PROJECT_NAV.map(project => {
        return {
            title : project.TITLE, 
            ref : ROUTES.PROJECT.BASE + "/" + props.project.name + project.REF
            }
    })
    
    return (
        <div className={"project-page" + expand}>
            <div className={"content-container" + expand}>
                <ToggleButton
                    value="checked"
                    selected={selected}
                    onChange={()=> {
                        setSelected(!selected);
                    }}
                    className="toggle-button"
                />
                    main page for {props.project.name}
            </div>
            <div className="sidebar">
                <ProjectNavbar isOpen={selected} links={links}/>  
            </div>
        </div>
           );
};

export default ProjectPage;
