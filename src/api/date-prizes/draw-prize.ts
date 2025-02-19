import { api } from "@/lib/axios";

export async function drawPrize(id: string) {
    const response = await api.patch('/drawPrize', 
        id,
        
        {
            withCredentials: false
        }
    );

    return { Prize: response };
}
