import { ShoppingCart } from "@/services/ShoppingCartService";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ShoppingCart[] = [];

const ShoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: initialState,
    reducers: {
        addShoppingCartStore(state, action: PayloadAction<ShoppingCart>) {
            state.push(action.payload);
        },
        deleteShoppingCartStore(state, action: PayloadAction<number>) {
            console.log("store :", action.payload)
            const index = state.findIndex(shoppingCart => shoppingCart.shoppingCartId === action.payload);
            console.log(index)
            if (index !== -1) state.splice(index, 1);
        },
        setShoppingCartsStore(state, action: PayloadAction<ShoppingCart[]>) {
            Object.assign(state, action.payload);
        },
        editShoppingCartStore(state, action: PayloadAction<ShoppingCart>) {
            const ShoppingCartId = action.payload.shoppingCartId;
            const index = state.findIndex(shoppingCart => shoppingCart.shoppingCartId === action.payload.shoppingCartId);
            if (index !== -1) state[index] = action.payload
        },
        resetShoppingCartsStore() {
            return initialState;
        }
    }
});

export const shoppingCartsStore = (state) => state.shoppingCart;
export const { addShoppingCartStore, deleteShoppingCartStore, setShoppingCartsStore, editShoppingCartStore, resetShoppingCartsStore } = ShoppingCartSlice.actions;

export default ShoppingCartSlice.reducer;