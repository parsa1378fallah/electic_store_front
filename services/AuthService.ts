import BaseService from "./BaseServices";

export default new (class AuthService extends BaseService {
    constructor() {
        super('http://localhost:3000/api');
    }

    async register(userData: {
        firstName: string;
        lastName: string;
        email: string;
        password: string
    }) {
        return this.Post<User>(`/auth/register`, userData);
    }
    async login(userData: {
        email: string;
        password: string
    }) {
        return this.Post<User>(`/auth/login`, userData);
    }
})()



interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string
    // Add more properties as needed
}