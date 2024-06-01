import BaseService from "./BaseServices";
const ShoppingCartService = new (class ShoppingCartService extends BaseService {
    constructor() {
        super('http://localhost:3000/api');
    }

    async addShoppingCart(ShoppingCartData: ShoppingCart) {
        return this.Post<ShoppingCart>(`/shopping-cart`, ShoppingCartData);
    }
    async getShoppingCarts(params: { ShoppingCartId?: number | null } = { ShoppingCartId: null }) {
        return this.fetch<ShoppingCart>(`/shopping-cart`, { params });
    }
    async deleteShoppingCart(ShoppingCartId: number) {
        return this.remove<ShoppingCart>(`/shopping-cart/${ShoppingCartId}`)
    }
    async editShoppingCart(ShoppingCartId: number, ShoppingCartData: ShoppingCart) {
        return this.update<ShoppingCart>(`/shopping-cart/${ShoppingCartId}`, ShoppingCartData)
    }

})()

export default ShoppingCartService

export interface ShoppingCart {
    shoppingCartId?: number,
    qty?: number,
    price: number,
    status: boolean,
    createdAt?: Date,
    updatedAt?: Date,
    userId: number,
    productId: number
}