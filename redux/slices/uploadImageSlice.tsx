import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ImageUploadState {
  selectedFile: File | null;
  uploadedImagePath: string | null;
}

const initialState: ImageUploadState = {
  selectedFile: null,
  uploadedImagePath: null,
};

export const imageUploadSlice = createSlice({
  name: "imageUpload",
  initialState,
  reducers: {
    setSelectedImage: (state, action: PayloadAction<File | null>) => {
      state.selectedFile = action.payload;
    },
    setUploadedImagePath: (state, action: PayloadAction<string | null>) => {
      state.uploadedImagePath = action.payload;
    },
  },
});

export const { setSelectedImage, setUploadedImagePath } =
  imageUploadSlice.actions;

export const uploadImagePathStore = (state) =>
  state.imageUpload?.uploadedImagePath;

export default imageUploadSlice.reducer;
