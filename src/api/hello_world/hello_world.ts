import { api } from "@/lib/axios";

export async function helloWorld(){
    const response = await api.get('', {withCredentials: false})

    return response
}