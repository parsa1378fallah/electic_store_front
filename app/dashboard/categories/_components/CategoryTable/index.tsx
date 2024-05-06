"use client";
import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { format } from "date-fns";
import CategoryService, { Category } from "@/services/CategoryService";
import EditDialog from "./EditCategoryDialog";
import { convertToJalali } from "@/utils/JallaliMoment";
import Image from "next/image";
import DeleteCategoryDialog from "./DeleteCategoryDialog";
const CategoryTable = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await CategoryService.getCategories();
        console.log(data);
        setCategories(data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <Table className="  border border-slate-400">
      <TableHeader className="bg-gray-300">
        <TableRow>
          <TableHead className="w-1/12 text-center border border-black">
            <p className="text-center">آیدی</p>
          </TableHead>
          <TableHead className="w-2/12 text-right border border-black">
            نام دسته بندی
          </TableHead>
          <TableHead className="w-2/12 text-right border border-black">
            زمان آپدیت
          </TableHead>
          <TableHead className="w-2/12 text-right border border-black">
            زمان ساخت
          </TableHead>
          <TableHead className="w-3/12 text-right border border-black">
            تصویر
          </TableHead>
          <TableHead className="w-1/12 text-right border border-black">
            <p className="text-center">عمل</p>
          </TableHead>
          <TableHead className="w-1/12 text-right border border-black">
            <p className="text-center">حذف</p>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category: Category) => (
          <TableRow key={category.categoryId}>
            <TableCell className="border border-black text-center">
              {category.categoryId}
            </TableCell>
            <TableCell className="border border-black">
              {category.categoryName}
            </TableCell>
            <TableCell className="border border-black">
              {convertToJalali(category.updatedAt)}
            </TableCell>
            <TableCell className="border border-black">
              {convertToJalali(category.createdAt)}
            </TableCell>
            <TableCell className="border border-black">
              {category.imageUrl ? (
                <Image
                  width={20}
                  height={20}
                  alt={"category image"}
                  src={category.imageUrl}
                />
              ) : null}
            </TableCell>
            <TableCell className="border border-black flex justify-center">
              <EditDialog category={category} />
            </TableCell>
            <TableCell className="border border-black">
              <DeleteCategoryDialog category={category} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
