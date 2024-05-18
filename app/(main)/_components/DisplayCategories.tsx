"use client";
import { useSelector, useDispatch } from "react-redux";
import { categoriesStore } from "@/redux/slices/categorySlice";
import { useEffect } from "react";
import { setCategoriesStore } from "@/redux/slices/categorySlice";
import CategoryService, { Category } from "@/services/CategoryService";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
const DisplayCategories = ({ classes }: { classes: string }) => {
  const dispatch = useDispatch();
  const categories = useSelector(categoriesStore);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await CategoryService.getCategories();
        console.log("index", categories.data);
        dispatch(setCategoriesStore(categories.data));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <ScrollArea>
      {" "}
      <div className={`flex gap-7 justify-center  py-5 px-8 ${classes}`}>
        {categories.map((category: Category) => (
          <div
            key={category.categoryId}
            className="flex flex-col justify-center items-center gap-5 "
          >
            <Link
              href={{
                pathname: `/products/${category.categoryName}`,
                query: { categoryId: category.categoryId },
              }}
            >
              {" "}
              <div className="relative h-20 w-20 rounded-full bg-gray-100 flex justify-center items-center overflow-hidden p-2">
                <Image
                  width={40}
                  height={40}
                  alt="category image"
                  src={category.imageUrl}
                />
              </div>
            </Link>

            <p className="text-gray-500 text-xs">{category.categoryName}</p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
};
export default DisplayCategories;
