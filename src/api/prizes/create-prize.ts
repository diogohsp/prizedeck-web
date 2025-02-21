import { api } from "@/lib/axios";
import { Prize } from "../interfaces";

export async function createPrize(data: Pick<Prize, "name" | "quantity">) {
    const response = await api.post('/prizes', 
        data,
        {
            withCredentials: false
        }
    );

    return { createPrize: response };
}
