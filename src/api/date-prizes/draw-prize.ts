import { api } from "@/lib/axios";

interface drawPrizeProps {
    id: string
}

export async function drawPrize({ id }: drawPrizeProps) {
    const response = await api.patch('/drawPrize', 
        id,
        
        {
            withCredentials: false
        }
    );

    return { Prize: response };
}
