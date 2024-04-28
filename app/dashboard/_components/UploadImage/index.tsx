"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Icons from "@/components/shared/icons";
import { useDispatch, useSelector } from "react-redux";
import UploadImageService from "@/services/UploadImage";
import { showToast } from "@/utils/toast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  setUploadedImagePath,
  uploadImagePathStore,
} from "@/redux/slices/uploadImageSlice";
import UploadedImage from "./UploadImageDialog";
export default function UserCard() {
  const dispatch = useDispatch();
  const uploadedImagePath = useSelector(uploadImagePathStore);

  const mutation = useMutation({
    mutationFn: UploadImageService.updateUserDataAfterUploadImage,
  });

  const handleUpdateUserData = async () => {
    if (!uploadedImagePath) {
      return showToast("error", "مشکل داریم");
    }

    if (mutation.isError) {
      return showToast("error", "مشکل داریم");
    }
    mutation.mutate({ image: uploadedImagePath as string });
  };

  return (
    <Card className=" px-12 py-10 tablet:min-w-[500px] shadow-md">
      <CardContent className=" px-0 flex items-stretch justify-normal gap-x-6">
        <Image
          width={1000}
          height={1000}
          className=" shadow-md w-24 h-24 border rounded-md object-cover"
          src={uploadedImagePath ? uploadedImagePath : "/images/user.png"}
          alt="sample pfp"
        />
        <div className=" space-y-2">
          <h1 className=" font-semibold">عکس پروفایل</h1>
          <div className=" text-gray-500 text-xs">
            عکس ها باید زیر 10 Mb باشند .
          </div>
          <div className=" flex items-center justify-normal gap-x-3">
            <UploadedImage />
            <Button size={"icon"} variant={"outline"}>
              <Icons name="Delete" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className=" border-t pt-5 pb-0 flex items-center justify-end gap-x-3">
        <Button
          onClick={() => dispatch(setUploadedImagePath(null))}
          className={"outline bg-red-500 text-white"}
        >
          انصراف
        </Button>
        <Button
          onClick={handleUpdateUserData}
          disabled={!uploadedImagePath}
          className="bg-green-400 text-white"
        >
          آپدیت
        </Button>
      </CardFooter>
    </Card>
  );
}
