import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    address: string | null;
    bio: string | null;
    birthDate: string | null;
    createdAt: string | null;
    email: string | null;
    firstName: string | null;
    gender: string | null;
    lastName: string | null;
    level: string | null;
    phoneNumber: string | null;
    profileImage: string | null;
    updatedAt: string | null;
    userId: number;
}

const initialState: UserState = {
    address: null,
    bio: null,
    birthDate: null,
    createdAt: null,
    email: null,
    firstName: null,
    gender: null,
    lastName: null,
    level: null,
    phoneNumber: null,
    profileImage: null,
    updatedAt: null,
    userId: 1
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserData: (state: UserState, action: PayloadAction<UserState>) => {
            return Object.assign(state, action.payload);
        }
    }
})

export const { setUserData } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user;
export default userSlice.reducer;
