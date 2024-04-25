import BaseService from "./BaseServices";

export default new (class UserService extends BaseService {
    constructor() {
        super('http://localhost:3000/api');
    }

    async editUser(userId: number, editData: {
        firstName: string;
        lastName: string;
        password: string;
        address: string;
        birthDate: Date;
        gender: string;
    }) {
        return this.update<User>(`/user/${userId}`, editData);
    }

})()



interface User {
    firstName: string;
    lastName: string;
    password: string;
    address: string;
    birthDate: Date;
    gender: string;
}