import { ExpensesProps } from "../types/expenses";
import apiClient from "./api-service";

export const ExpenseListGet = async (page: number, perPage: number) => {
    const response = await apiClient.get(`/expenses?page=${page}&perPage=${perPage}`);
    return response.data;
}

export const ExpensePost = async (expense: ExpensesProps) => {
    const response = await apiClient.post(`/expenses`, expense);
    return response.data;
}

export const ExpenseEdit = async (id: string, expense: ExpensesProps) => {
    const response = await apiClient.put(`/expenses/${id}`, expense);
    return response;
}

export const ExpenseGet = async (id: string) => {
    const response = await apiClient.get(`/expenses/${id}`);
    return response.data;
}
export const ExpenseDelete = async (id: string) => {
    const response = await apiClient.delete(`/expenses/${id}`);
    return response.data;
}