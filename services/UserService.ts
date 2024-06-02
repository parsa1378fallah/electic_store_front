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
    address: string | null;
    bio: string | null;
    birthDate: string | null;
    createdAt: string | null;
    email: string | null;
    firstName: string | null;
    gender: string | null;
    lastName: string | null;
    level: string | null;
    password: string | null;
    phoneNumber: string | null;
    profileImage: string | null;
    updatedAt: string | null;
    userId: number;
}