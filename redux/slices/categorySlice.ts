import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Category {
    categoryId: number;
    categoryName: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
}

const initialState: Category[] = [];

const CategorySlice = createSlice({
    name: 'category',
    initialState: initialState,
    reducers: {
        addCategoryStore(state, action: PayloadAction<Category>) {
            state.push(action.payload);
        },
        deleteCategoryStore(state, action: PayloadAction<Category>) {
            const index = state.findIndex(category => category.categoryId === action.payload.categoryId);
            if (index !== -1) state.splice(index, 1);
        },
        setCategoriesStore(state, action: PayloadAction<Category[]>) {
            Object.assign(state, action.payload);
        },
        editCategoryStore(state, action: PayloadAction<Category>) {
            const categoryId = action.payload.categoryId;
            const index = state.findIndex(category => category.categoryId === action.payload.categoryId);
            if (index !== -1) state[index] = action.payload
        }
    }
});

export const categoriesStore = (state) => state.category;
export const { addCategoryStore, deleteCategoryStore, setCategoriesStore, editCategoryStore } = CategorySlice.actions;

export default CategorySlice.reducer;