import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { User } from "@/services/UserService";

const initialState: User = {
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
    password: null,
    userId: 1
};

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setUserDataStore: (state: User, action: PayloadAction<User>) => {
            return Object.assign(state, action.payload);
        },
        setUserProfileImage: (state: User, action: PayloadAction<string>) => {
            state.profileImage = action.payload;
        }
    }
})

export const { setUserDataStore, setUserProfileImage } = userSlice.actions;
export const userDataStore = (state: { user: User }) => state.user;
export default userSlice.reducer;
