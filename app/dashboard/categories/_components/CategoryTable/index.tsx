"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import CategoryService, { Category } from "@/services/CategoryService";
import EditCategoryDialog from "./EditCategoryDialog";
import DeleteCategoryDialog from "./DeleteCategoryDialog";
import { convertToJalali } from "@/utils/JallaliMoment";
import Image from "next/image";
import {
  categoriesStore,
  setCategoriesStore,
} from "@/redux/slices/categorySlice";
import { useDispatch, useSelector } from "react-redux";
const CategoryTable = () => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesStore);
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
    <Table>
      <TableHeader className="bg-gray-300">
        <TableRow>
          <TableHead className="w-1/12 text-center ">
            <p className="text-center">آیدی</p>
          </TableHead>
          <TableHead className="w-2/12 text-right ">نام دسته بندی</TableHead>
          <TableHead className="w-2/12 text-right ">زمان آپدیت</TableHead>
          <TableHead className="w-2/12 text-right ">زمان ساخت</TableHead>
          <TableHead className="w-1/12 text-center ">تصویر</TableHead>
          <TableHead className="w-1/12 text-right ">
            <p className="text-center">عمل</p>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((category: Category) => (
          <TableRow key={category.categoryId}>
            <TableCell className=" text-center">
              {category.categoryId}
            </TableCell>
            <TableCell>{category.categoryName}</TableCell>
            <TableCell>{convertToJalali(category.updatedAt)}</TableCell>
            <TableCell>{convertToJalali(category.createdAt)}</TableCell>
            <TableCell className=" text-center">
              {category.imageUrl ? (
                <Image
                  width={20}
                  height={20}
                  alt={"category image"}
                  src={category.imageUrl}
                />
              ) : null}
            </TableCell>
            <TableCell className="p-0">
              <TableCell>
                <EditCategoryDialog category={category} />
              </TableCell>
              <TableCell>
                {" "}
                <DeleteCategoryDialog category={category} />
              </TableCell>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
