import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface product {
    productId: number,
    productName: string,
    productImageUrl: string,
    productPrice: number,
    productQty: number,
    productIsActive: boolean,
    productRating: number,
    createdAt: Date,
    updatedAt: Date,
}
const initialState: product[] = [];

const productSlice = createSlice({
    name: 'product',
    initialState: initialState,
    reducers: {
        addProductStore(state, action: PayloadAction<product>) {
            state.push(action.payload);
        },
        deleteProductStore(state, action: PayloadAction<product>) {
            const index = state.findIndex(product => product.productId === action.payload.productId);
            if (index !== -1) state.splice(index, 1);
        },
        setProductsStore(state, action: PayloadAction<product[]>) {
            Object.assign(state, action.payload);
        },
        editProductStore(state, action: PayloadAction<product>) {
            const productId = action.payload.productId;
            const index = state.findIndex(product => product.productId === action.payload.productId);
            if (index !== -1) state[index] = action.payload
        }
    }
});

export const productsStore = (state) => state.product;
export const { addProductStore, deleteProductStore, setProductsStore, editProductStore } = productSlice.actions;

export default productSlice.reducer;