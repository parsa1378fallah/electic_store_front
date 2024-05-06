import BaseService from "./BaseServices";
const CategoryService = new (class CategoryService extends BaseService {
    constructor() {
        super('http://localhost:3000/api');
    }

    async addCategory(categoryName: string) {
        return this.Post<Category>(`/category`, { categoryName });
    }
    async getCategories() {
        return this.fetch<Category>(`/category`);
    }
    async deleteCategory(categoryId: number) {
        return this.remove<Category>(`/category/${categoryId}`)
    }
    async editCategory(categoryId: number, categoryName: string) {
        return this.update<Category>(`/category/${categoryId}`, { categoryName })
    }

})()

export default CategoryService

export interface Category {
    categoryId: number,
    categoryName: string,
    imageUrl: string,
    createdAt: Date,
    updatedAt: Date,
}