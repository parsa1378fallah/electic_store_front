"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { userDataStore, setUserProfileImage } from "@/redux/slices/userSlice";
import UploadImageService from "@/services/UploadImage";
import ProductService from "@/services/ProductService";
import { addProductStore } from "@/redux/slices/productSlice";
import {
  setSelectedImage,
  setUploadedImagePath,
  selectUploadedImagePath,
} from "@/redux/slices/uploadImageSlice";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
import Icons from "@/components/shared/icons";
import { useEffect } from "react";
import CategoryService, { Category } from "@/services/CategoryService";
import {
  setCategoriesStore,
  categoriesStore,
} from "@/redux/slices/categorySlice";
const FormSchema = z.object({
  productName: z
    .string({ required_error: "نام محصول نباید خالی باشد" })
    .min(1, {
      message: "نام محصول نباید خالی باشد",
    }),
  productQty: z.coerce.number({
    required_error: "تعداد محصول نباید خالی باشد",
    invalid_type_error: "تعداد محصول باید یک عدد باشد",
  }),
  productPrice: z.coerce.number({
    required_error: "فیلد قیمت محصول نباید خالی باشد",
    invalid_type_error: "قیمت محصول باید یک عدد باشد",
  }),
  productIsActive: z.coerce.boolean({
    required_error: "وضعیت محصول را مشخص کنید",
  }),
  productDescription: z
    .string({
      required_error: "درباره محصول توضیحاتی بدهید",
    })
    .min(10, {
      message: "توضیحات باید بیشتر از 10 کارکتر باشند",
    })
    .max(500, {
      message: "توضیحات نباید بیش از 160 کارکتر باشند",
    }),
  categoryId: z.coerce.number({
    required_error: "لطفا دسته بندی را انتخاب کنید",
  }),
});

const AddProductDialogForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      productName: undefined,
      productQty: undefined,
      productPrice: undefined,
      productDescription: undefined,
      categoryId: undefined,
    },
  });
  const dispatch = useDispatch();
  const selectedImage = useSelector((state) => state.imageUpload?.selectedFile);
  const userData = useSelector(userDataStore);
  const uploadedImagePath = useSelector(selectUploadedImagePath);
  const categories = useSelector(categoriesStore);

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
  const handleImageUpload = async (image: File, productId: number) => {
    if (!image) return;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("file", image);
      const res = await UploadImageService.uploadProductImage(
        productId,
        formData
      );
      if (res.data.url) {
        dispatch(setUploadedImagePath(res.data.url));
      }
      return res.data.product;
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };
  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const response = await ProductService.addProduct(values);
    const newProduct = await handleImageUpload(
      selectedImage,
      response.data.productId
    );
    console.log("new product", newProduct);
    newProduct
      ? dispatch(addProductStore(newProduct))
      : dispatch(addProductStore(response.data));
    dispatch(setSelectedImage(null));
  }
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await CategoryService.getCategories();
        dispatch(setCategoriesStore(categories.data));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="px-10 py-2 space-y-3"
      >
        <FormField
          control={form.control}
          name="productName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام محصول</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productPrice"
          render={({ field }) => (
            <FormItem>
              <FormLabel>قیمت محصول</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productQty"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تعداد محصول</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productIsActive"
          render={({ field }) => (
            <FormItem>
              <FormLabel>وضعیت محصول</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value={"1"}>بله</SelectItem>
                  <SelectItem value={"0"}>خیر</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>دسته بندی محصول</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="انتخاب کنید" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {categories.map((category: Category) => (
                    <SelectItem
                      key={category.categoryId}
                      value={category.categoryId.toString()}
                    >
                      {category.categoryName}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="productDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>توضیحات</FormLabel>
              <FormControl>
                <Textarea className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
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
        <Button type="submit">ثبت محصول</Button>
      </form>
    </Form>
  );
};

export default AddProductDialogForm;
