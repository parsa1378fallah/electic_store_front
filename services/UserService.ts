import BaseService from "./BaseServices";

export default new (class UserService extends BaseService {
    constructor() {
        super('http://localhost:3000/api');
    }

    async editUser(userId: number, editData: {
        firstName: string | undefined;
        lastName: string | undefined;
        password: string | undefined;
        address: string | undefined;
        birthDate: Date | undefined;
        gender: string | undefined;
        level: string | undefined | null
    }) {
        return this.update<User>(`/user/${userId}`, editData);
    }
    async getUsers() {
        return this.fetch(`/user`)
    }

})()



export interface User {
    userId: number,
    email: string,
    createdAt: Date,
    level: string,
    firstName: string;
    lastName: string;
    password: string;
    address: string;
    birthDate: Date;
    gender: string;
}