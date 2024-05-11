import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postSlice";
import loginSlice from "./slices/loginSlice";
import userSlice from "./slices/userSlice";
import uploadImageSlice from "./slices/uploadImageSlice";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";
export const store = configureStore({
    reducer: {
        posts: postsSlice,
        login: loginSlice,
        user: userSlice,
        imageUpload: uploadImageSlice,
        category: categorySlice,
        product: productSlice
    }
});