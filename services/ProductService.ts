import BaseService from "./BaseServices";
const ProductService = new (class ProductService extends BaseService {
    constructor() {
        super('http://localhost:3000/api');
    }

    async addProduct(productData: product) {
        return this.Post<product>(`/product`, productData);
    }
    async getProducts(params: { categoryId?: number | null, productId?: number | null } = { categoryId: null, productId: null }) {
        return this.fetch<product>(`/product`, { params });
    }
    async deleteProduct(productId: number) {
        return this.remove<product>(`/product/${productId}`)
    }
    async editProduct(productId: number, productData: product) {
        return this.update<product>(`/product/${productId}`, productData)
    }

})()

export default ProductService

export interface product {
    productId: number,
    productName: string,
    productImageUrl: string,
    productPrice: number,
    productQty: number,
    productIsActive: boolean,
    productRating: number,
    productDescription: string
    createdAt: Date,
    updatedAt: Date,
}