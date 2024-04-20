import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postSlice";
import loginSlice from "./slices/loginSlice";

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        login: loginSlice
    }
});