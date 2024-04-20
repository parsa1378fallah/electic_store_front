import axios, { AxiosRequestConfig } from 'axios';


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
            return response.data;
        } catch (error: any) {
            console.log(error)
        }
    }

    async Post<T>(url: string, data: any, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.post<T>(`${this.baseURL}${url}`, data, options);
            console.log(response.data)
            return response.data;
        } catch (error: any) {
            console.log(error)
        }
    }

    async update<T>(url: string, data: any, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.put<T>(`${this.baseURL}${url}`, data, options);
            console.log(response.data)
            return response.data;
        } catch (error: any) {
            console.log(error)
        }
    }

    async remove<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.delete<T>(`${this.baseURL}${url}`, options);
            console.log(response.data)
            return response.data;
        } catch (error: any) {
            console.log(error)
        }
    }


}

export default BaseService;
