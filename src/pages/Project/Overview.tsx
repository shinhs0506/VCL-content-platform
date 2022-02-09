import React from 'react'

interface OverviewParams {
    project_names: string[];
}

const Overview: React.FC<OverviewParams> = (project) => {
    console.log("i am in overview")
    console.log(project.project_names);

    return (
        <div>
                {project.project_names.map((name, i) => {
                {console.log(name)}
                    return <li key={i}>{name}</li>
                        })}
        </div>
           )
}

export default Overview;

