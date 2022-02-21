import React from 'react'
import { RouteComponentProps, Switch, Route } from 'react-router';
import { useAppSelector } from '@redux/hooks';
import { selectProjects } from '@redux/slices/ProjectRedux';
import { TEXT } from '@statics'
import ROUTES from '@statics/routes';
import { 
ProjectOverview, 
ProjectDefault, 
ProjectJoin,
ProjectResources,
ProjectTeam,
ProjectContact } from './'
import { Project } from '@entities/Project'
import PROJECT_NAV from '@statics/projectNav'
import ProjectNavbar from '@components/ProjectNavbar'

interface MatchParams {
    project_id: string;
}

interface ProjectProps extends RouteComponentProps<MatchParams> {
}

const ProjectWrapper: React.FC<ProjectProps> = ({match}) => {
    const [ selected, setSelected ] = React.useState(true);
    const expand = selected? '' : 'expand'

    const projects = useAppSelector(selectProjects); 

    const curr_project: Project | undefined = projects.find(project => project.name === match.params.project_id)

    if (!curr_project) {
        return <div>Selected project does not exist</div>
    }

    let links: {title: string, ref: string}[] = PROJECT_NAV.map(project => {
        return {
            title : project.TITLE, 
            ref : ROUTES.PROJECT.BASE + "/" + curr_project.name + project.REF
            }
    })

    console.log(match.url)

    return (
        <div className={"project-page" + expand}>
            <div className={"content-container" + expand}>
                <Switch>
                    <Route exact path={match.url} render={() => <ProjectDefault project={curr_project}/>}/>
                    <Route exact path={`${match.url}/join`} render={() => <ProjectJoin project={curr_project}/>}/>
                    <Route exact path={`${match.url}/resources`} render={() => <ProjectResources project={curr_project}/>}/>
                    <Route exact path={`${match.url}/team`} render={() => <ProjectTeam project={curr_project}/>}/>
                    <Route exact path={`${match.url}/contact`} render={() => <ProjectContact project={curr_project}/>}/>
                </Switch>
            </div>
            <div className="sidebar">
                <ProjectNavbar isOpen={selected} links={links}/>  
            </div>
        </div>
    )
}

export default ProjectWrapper
