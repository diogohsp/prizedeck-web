import { api } from "@/lib/axios";
import { SignIn } from "../interfaces";

interface SignInResponse {
    token: string;
}

export async function signIn(data: SignIn): Promise<SignInResponse> {
    const response = await api.post<{ token: string }>('/sessions', data, {
        withCredentials: false
    });

    return { token: response.data.token };
}
