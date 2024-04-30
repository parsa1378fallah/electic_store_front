export interface UserData {
    image: string;
}
import BaseService from "./BaseServices";
const UploadImageService = new (class UploadImageService extends BaseService {
    constructor() {
        super('http://localhost:3000/api');
    }
    async updateUserDataAfterUploadImage(data: UserData) {
        return this.Post<Upload>(`/upload/profile-image`, data);
    }
    async uploadProfileImage(userId: number, formData: FormData) {
        return this.Post<Upload>(`/upload/profile-image/${userId}`, formData);
    }
})()

export default UploadImageService

interface Upload {
    filename: string,
    url: string
}