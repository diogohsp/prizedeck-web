import { api } from "@/lib/axios";
import { Prize } from "../interfaces";

export async function createPrize(data: Prize) {
    const response = await api.post('/prizes', 
        data,
        {
            withCredentials: false
        }
    );

    return { createPrize: response };
}
