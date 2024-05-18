"use client";

import React, { useState } from "react";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Icons from "@/components/shared/icons";
import {
  setSelectedImage,
  setUploadedImagePath,
  selectUploadedImagePath,
} from "@/redux/slices/uploadImageSlice";
import { useDispatch, useSelector } from "react-redux";
import UploadImageService from "@/services/UploadImage";
import { userDataStore, setUserProfileImage } from "@/redux/slices/userSlice";
export default function ImageUpload() {
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.imageUpload?.selectedFile);
  const userData = useSelector(userDataStore);
  const uploadedImagePath = useSelector(selectUploadedImagePath);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const selectedImage = event.target.files[0];
      dispatch(setSelectedImage(selectedImage));
      handleImageUpload(selectedImage);
    }
  };

  const removeSelectedImage = () => {
    setLoading(false);
    dispatch(setUploadedImagePath(null));
    dispatch(setSelectedImage(null));
  };

  const handleImageUpload = async (image: File) => {
    if (!image) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", image);
      const res = await UploadImageService.uploadProfileImage(
        userData.userId,
        formData
      );
      if (res && res.data && res.data.url) {
        dispatch(setUploadedImagePath(res.data.url));
        dispatch(setUserProfileImage(res.data.user.profileImage));
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedImage = acceptedFiles[0];
      dispatch(setSelectedImage(selectedImage));
      handleImageUpload(selectedImage);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Dialog>
      <DialogTrigger>
        <div className=" bg-black text-white flex items-center py-2 px-3 rounded-md hover:bg-opacity-80">
          <Icons name="Upload" />
          <span className=" ml-2 text-sm">آپلود عکس</span>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" mb-3 ml-auto">آپلود عکس پروفایل</DialogTitle>

          <div
            {...getRootProps()}
            className=" flex items-center justify-center w-full"
          >
            <label
              htmlFor="dropzone-file"
              className="relative flex flex-col items-center justify-center w-full py-6 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              {loading && (
                <div className=" text-center max-w-md  ">
                  <p className=" text-sm font-semibold">در حال آپلود عکس</p>
                  <p className=" text-xs text-gray-400">
                    زمانی که عکس در حال بارگذاری است صفحه را رفرش نکنید
                  </p>
                </div>
              )}

              {!loading && !uploadedImagePath && (
                <div className=" text-center">
                  <div className=" border p-2 rounded-md max-w-min mx-auto">
                    <Icons name="Upload" />
                  </div>

                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Drag an image</span>
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-400">
                    کلید کنید تا آپلود شود &#40;عکس باید به صورت 500*500 و زیر
                    10 Mb حچم داشته باشد . &#41;
                  </p>
                </div>
              )}

              {uploadedImagePath && !loading && (
                <div className="text-center">
                  <Image
                    width={1000}
                    height={1000}
                    src={uploadedImagePath}
                    className=" w-full object-contain max-h-16 mx-auto mt-2 mb-3 opacity-70"
                    alt="uploaded image"
                  />
                  <p className=" text-sm font-semibold">عکس آپلود شد</p>
                  <p className=" text-xs text-gray-400">
                    ارسال را بزنید تا عکس آپلود شود
                  </p>
                </div>
              )}
            </label>

            <Input
              {...getInputProps()}
              id="dropzone-file"
              accept="image/png, image/jpeg"
              type="file"
              className="hidden"
              disabled={loading || uploadedImagePath !== null}
              onChange={handleImageChange}
            />
          </div>
        </DialogHeader>

        <DialogFooter className=" flex items-center justify-end gap-x-2">
          <DialogClose asChild>
            <Button
              onClick={removeSelectedImage}
              type="button"
              variant="secondary"
            >
              بستن
            </Button>
          </DialogClose>

          <DialogClose asChild>
            <Button
              disabled={!selectedImage || loading}
              size={"sm"}
              className=" text-sm"
            >
              {loading ? "در حال آپلود" : "ارسال"}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
