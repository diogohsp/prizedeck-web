import { api } from "@/lib/axios";
import { Prize } from "../interfaces";

export interface listRegisteredPrizesResponse {
    data: Prize[];
    status: number;
    statusText: string;
}

export interface listRegisteredPrizes {
    data: Prize[];
}

export async function listRegisteredPrizes(){
    const response: listRegisteredPrizesResponse = await api.get('/prizes', {withCredentials: false})

    return {listRegisteredPrizes: response.data}
}