import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();
const BASE_URL = process.env.REACT_APP_API_URL;

export default class ProjectAPI {
    static async getAllProjects(): Promise<any> {
        try {
            const response = await axios.get(BASE_URL + "api/projects")
            return response;
        } catch (e) {
            return e;
        }
    }
}
