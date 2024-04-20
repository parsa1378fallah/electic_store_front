import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: boolean = false;

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        loginUserStore: (state: boolean) => {
            return state = true
        },
        logoutUserStore: (state: boolean) => {
            return state = false;
        },

    }
})

export const { loginUserStore, logoutUserStore } = loginSlice.actions;
export const isLogedIn = (state: boolean) => state.login
export default loginSlice.reducer;