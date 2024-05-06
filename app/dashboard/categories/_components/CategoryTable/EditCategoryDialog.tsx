import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Icons from "@/components/shared/icons/index";
import { useState } from "react";
import {
  setSelectedImage,
  setUploadedImagePath,
  selectUploadedImagePath,
} from "@/redux/slices/uploadImageSlice";
import { useDispatch, useSelector } from "react-redux";
import { userDataStore, setUserProfileImage } from "@/redux/slices/userSlice";
import UploadImageService from "@/services/UploadImage";
import CategoryService, { Category } from "@/services/CategoryService";
const EditCategoryDialog = ({ category }: { category: Category }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [newCategoryName, setNewCategoryName] = useState<string>("");
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.imageUpload?.selectedFile);
  const userData = useSelector(userDataStore);
  const uploadedImagePath = useSelector(selectUploadedImagePath);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedImage = acceptedFiles[0];
      dispatch(setSelectedImage(selectedImage));
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const selectedImage = event.target.files[0];
      dispatch(setSelectedImage(selectedImage));
    }
  };
  const handleImageUpload = async (image: File, categoryId: number) => {
    if (!image) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", image);
      const res = await UploadImageService.uploadCategoryImage(
        categoryId,
        formData
      );
      // if (res && res.data && res.data.url) {
      //   dispatch(setUploadedImagePath(res.data.url));
      //   dispatch(setUserProfileImage(res.data.user.profileImage));
      // }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };
  const addCategory = async () => {
    console.log(category.categoryId, newCategoryName);
    const response = await CategoryService.editCategory(
      category.categoryId,
      newCategoryName
    );
    console.log(response.data.categoryId);
    handleImageUpload(selectedImage, response.data.categoryId);
    console.log(response);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ویرایش</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex justify-center items-start">
          <DialogTitle>ویرایش کردن دسته بندی</DialogTitle>
        </DialogHeader>
        <Label>نام دسته بندی</Label>
        <Input
          type="text"
          value={newCategoryName}
          onChange={(e) => setNewCategoryName(e.target.value)}
        />
        <Label>تصویر مربوط به دسته بندی</Label>
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
                  کلید کنید تا آپلود شود &#40;عکس باید به صورت 500*500 و زیر 10
                  Mb حچم داشته باشد . &#41;
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
        <DialogFooter>
          <Button onClick={() => addCategory()}>ویرایش کردن دسته بندی</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default EditCategoryDialog;
