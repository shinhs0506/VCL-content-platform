import axios from 'axios'
import dotenv from 'dotenv'

dotenv.config();
const baseURL = process.env.REACT_APP_API_URL;

export default class ProjectAPI {
    static async getAllProjects(): Promise<any> {
        try {
            const response = await axios.get("/api/projects", {
                baseURL,
                headers: {
                    authorization: "access",
                },
            });

            return response;
        } catch (e) {
            return e;
        }
    }
}
