import React from 'react'

interface OverviewParams {
    project_names: string[];
}

const Overview: React.FC<OverviewParams> = (project) => {

    return (
        <div>
            <div>
                All Projects
            </div>
            <div>
                {project.project_names.map((name, i) => {
                    return <li key={i}>{name}</li>
                        })}
            </div>
        </div>
           )
}

export default Overview;

