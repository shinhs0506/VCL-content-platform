import {RootState} from "@redux/store";
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { Project } from '@components/generics/Project/Project'

export interface ProjectState {
    projects: Project[]
}

const initialState: ProjectState = {
    projects: []
}

export const projectSlice = createSlice({
    name: 'project',
    initialState,
    reducers: {
        setProjects: (state, { payload }: PayloadAction<Project[]>) => {
            console.log(payload);
            state.projects = payload;
        },
        addProject: (state, { payload }: PayloadAction<Project>) => {
            state.projects.push(
                payload
            )
        },
        removeProject: (state, { payload }: PayloadAction<string>) => {
            let index = state.projects.map((e) => e.name).indexOf(payload);
            if (index !== -1) {
                state.projects.splice(index);
            }
        },
    }
});

export const selectProject = (state: RootState) => state.project;
export const selectProjects = (state: RootState) => state.project.projects;
export const selectProjectByName = (state: RootState, name: string) => {
    let index = state.project.projects.map((e) => e.name).indexOf(name);
    return index === -1 ? null : state.project.projects[index]; 
}

export const projectActions = projectSlice.actions;
export default projectSlice.reducer;
