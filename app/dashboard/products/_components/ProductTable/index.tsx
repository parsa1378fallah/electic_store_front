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
import ProductService, { product } from "@/services/ProductService";
import EditProductDialog from "./EditProductDialog/index";
import { convertToJalali } from "@/utils/JallaliMoment";
import Image from "next/image";
import DeleteProductDialog from "./DeleteProductDialog";
import { productsStore, setProductsStore } from "@/redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
const CategoryTable = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsStore);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await ProductService.getProducts();
        dispatch(setProductsStore(products.data));
      } catch (error) {
        console.error("Error fetching Products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Table>
      <TableHeader className="bg-gray-300">
        <TableRow>
          <TableHead className="w-1/12 text-center ">
            <p className="text-center">آیدی</p>
          </TableHead>
          <TableHead className="w-2/12 text-right text-sm">دسته بندی</TableHead>
          <TableHead className="w-2/12 text-right text-sm">محصول</TableHead>
          <TableHead className="w-1/12 text-right text-sm">تعداد</TableHead>
          <TableHead className="w-1/12 text-right text-sm">قیمت</TableHead>
          <TableHead className="w-1/12 text-right text-sm">امتیاز</TableHead>
          <TableHead className="w-2/12 text-right text-sm">
            زمان آپدیت
          </TableHead>
          <TableHead className="w-2/12 text-right text-sm">زمان ساخت</TableHead>
          <TableHead className="w-1/12 text-right text-sm">تصویر</TableHead>
          <TableHead className="w-1/12 text-right text-sm">
            <p className="text-center">عمل</p>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((product: product, index: number) => (
          <TableRow key={index + 1}>
            <TableCell className=" text-center">{index + 1}</TableCell>
            <TableCell className=" text-center">
              {product.category.categoryName}
            </TableCell>
            <TableCell className="">{product.productName}</TableCell>
            <TableCell>{product.productQty}</TableCell>
            <TableCell>{product.productPrice}</TableCell>
            <TableCell>{product.productRating}</TableCell>
            <TableCell>{convertToJalali(product.updatedAt)}</TableCell>
            <TableCell>{convertToJalali(product.createdAt)}</TableCell>
            <TableCell>
              {product.productImageUrl ? (
                <Image
                  width={20}
                  height={20}
                  alt={"product image"}
                  src={product.productImageUrl}
                  className="w-auto h-auto"
                />
              ) : null}
            </TableCell>
            <TableCell className="flex justify-center">
              <TableCell>
                <EditProductDialog product={product} />
              </TableCell>
              <TableCell>
                <DeleteProductDialog product={product} />
              </TableCell>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
