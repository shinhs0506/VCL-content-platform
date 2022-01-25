import { useEffect }from 'react';
import { useAppDispatch } from '@redux/hooks';
import { projectActions } from '@redux/slices/ProjectRedux';
import { callGetAllProjectsAPI } from '@services/adapters/projectAdapter'

export const useHandleGetAllProjects = () => {
    const dispatch = useAppDispatch();

    const handleGetAllProjects = async () => {
        callGetAllProjectsAPI()
            .then((res) => {
                if (res.data) {
                    dispatch(projectActions.setProjects(res.data)) 
                }
            })
            .catch(() => console.error('Error: projectService.ts getAllProjects call'))
    }

    useEffect(() => {
        handleGetAllProjects();
    }, []);
}
