import axios, { AxiosRequestConfig } from 'axios';
import { showToast } from "@/utils/toast";


interface ErrorResponse {
    message: string;
}

class BaseService {
    baseURL: string;


    constructor(baseURL: string) {
        this.baseURL = baseURL;

    }

    async fetch<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.get<T>(`${this.baseURL}${url}`, options);
            console.log(response.data)
            showToast("success", response.data.message);
            return response.data;
        } catch (error: any) {
            showToast("error", error.response.data.message);
        }
    }

    async Post<T>(url: string, data: any, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.post<T>(`${this.baseURL}${url}`, data, options);
            console.log(response.data)
            showToast("success", response.data.message);
            return response.data;
        } catch (error: any) {
            showToast("error", error.response.data.message);
        }
    }

    async update<T>(url: string, data: any, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.put<T>(`${this.baseURL}${url}`, data, options);
            console.log(response.data)
            showToast("success", response.data.message);
            return response.data;
        } catch (error: any) {
            showToast("error", error.response.data.message);
        }
    }

    async remove<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.delete<T>(`${this.baseURL}${url}`, options);
            console.log(response.data)
            showToast("success", response.data.message);
            return response.data;
        } catch (error: any) {
            showToast("error", error.response.data.message);
        }
    }


}

export default BaseService;
