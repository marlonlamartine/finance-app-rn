import apiClient from "./api-service";

export const authentication = async (email: string) => {
    const response = await apiClient.get(`/start/${email}`);
    return response.data.token;
}