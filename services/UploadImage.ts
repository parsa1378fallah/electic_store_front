export interface UserData {
    image: string;
}
import BaseService from "./BaseServices";
const UploadImageService = new (class UploadImageService extends BaseService {
    constructor() {
        super('http://localhost:3000/api');
    }
    async uploadProfileImage(userId: number, formData: FormData) {
        return this.Post<Upload>(`/upload/profile-image/${userId}`, formData);
    }
    async uploadCategoryImage(categoryId: number, formData: FormData) {
        return this.Post<Upload>(`/upload/category-image/${categoryId}`, formData);
    }
    async uploadProductImage(productId: number, formData: FormData) {
        return this.Post<Upload>(`/upload/product-image/${productId}`, formData);
    }
})()

export default UploadImageService

interface Upload {
    filename: string,
    url: string
}