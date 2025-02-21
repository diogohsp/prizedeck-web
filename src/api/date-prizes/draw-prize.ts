import { api } from "@/lib/axios";
import { AxiosResponse } from "axios";

interface drawPrizeProps {
    id: string
} 

interface DrawPrizeResponse {
    datePrize: {
        id: string;
        dateHourPrize: Date;
        awarded: boolean;
        prize_code: number;
    };
    prize: {
        name: string;
        id: string;
        code: number;
        quantity: number;
    };
}

export async function drawPrize({ id }: drawPrizeProps): Promise<AxiosResponse<DrawPrizeResponse>> {
    const response = await api.patch('/drawprize', 
       {id}, 
        {
            withCredentials: false
        }
    );

    return response;
}
