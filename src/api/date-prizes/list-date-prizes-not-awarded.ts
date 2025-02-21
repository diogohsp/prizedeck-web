import { api } from "@/lib/axios";
import { Prize } from "../interfaces";

export interface listDatePrizesResponse {
    data: Prize[];
    status: number;
    statusText: string;
}

export interface listDatePrizes {
    data: Prize[];
}

export async function listDatePrizesNotAwarded(){
    const response: listDatePrizesResponse = await api.get('/dateprizes?awarded=true', {withCredentials: false})

    return {listRegisteredPrizes: response.data}
}