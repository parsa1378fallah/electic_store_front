import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./slices/postSlice";
import loginSlice from "./slices/loginSlice";
import userSlice from "./slices/userSlice"

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        login: loginSlice,
        user: userSlice
    }
});