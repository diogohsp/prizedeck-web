import axios from 'axios'

import { env } from '@/env'
import { getToken } from '@/utils/getToken'

export const api = axios.create({
    baseURL: env.VITE_API_URL,
    withCredentials: true //automate tokens credentials
})

api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

if(env.VITE_API_WITH_DELAY){
    api.interceptors.request.use(async (config) => {
        await new Promise((resolve) => setTimeout(resolve, 2000))
        return config
    })
}