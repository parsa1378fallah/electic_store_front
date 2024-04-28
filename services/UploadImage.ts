export interface UserData {
    image: string;
}
import BaseService from "./BaseServices";
const UploadImageService = new (class UploadImageService extends BaseService {
    constructor() {
        super('http://localhost:3000/api');
    }
    async updateUserDataAfterUploadImage(data: UserData) {
        return this.Post<User>(`/upload/profile-image`, data);
    }
    async uploadProfileImage(formData: FormData) {
        return this.Post<User>(`/upload/profile-image`, formData);
    }
})()

export default UploadImageService

interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string
    // Add more properties as needed
}