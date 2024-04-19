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
            return response.data;
        } catch (error) {
            throw new Error('An error occurred while fetching data.');
        }
    }

    async Post<T>(url: string, data: any, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.post<T>(`${this.baseURL}${url}`, data, options);
            return response.data;
        } catch (error) {
            throw new Error('An error occurred while creating data.');
        }
    }

    async update<T>(url: string, data: any, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.put<T>(`${this.baseURL}${url}`, data, options);
            return response.data;
        } catch (error) {
            throw new Error('An error occurred while updating data.');
        }
    }

    async remove<T>(url: string, options: AxiosRequestConfig = {}): Promise<T> {
        try {
            const response = await axios.delete<T>(`${this.baseURL}${url}`, options);
            return response.data;
        } catch (error) {
            throw new Error('An error occurred while deleting data.');
        }
    }


}

export default BaseService;
