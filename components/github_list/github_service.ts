import axios from "axios";
import { repository } from "../types";

const apiClient = axios.create({ baseURL: 'https://api.github.com/users/Juan-Valenz/repos' })

class githubClient {
    constructor() {
        apiClient.interceptors.request.use((config) => {
            console.log('Request sent!');
            return config
        })
        apiClient.interceptors.response.use(response => {
            console.log('Recieved response!')
            return response
        })

    }
    getList() {
        const repository: repository[] = [];
        apiClient.get('/')
            .then(response => {
                const data = response.data;
                console.log(typeof data)
                // repository.push({
                //     name: data.name,
                //     description: data.description,
                //     updated: data.updated,
                //     created: data.created,
                //     urls: {
                //         website: data.homepage,
                //         github: data.url
                //     },
                //     languages: [data.language],
                //     topics: data.topics
                // })
            }).catch()
    }
}

export default githubClient