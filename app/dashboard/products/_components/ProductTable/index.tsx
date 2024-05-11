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
    <Table className="  border border-slate-400">
      <TableHeader className="bg-gray-300">
        <TableRow>
          <TableHead className="w-1/12 text-center border border-black">
            <p className="text-center">آیدی</p>
          </TableHead>
          <TableHead className="w-2/12 text-right border border-black">
            نام محصول
          </TableHead>
          <TableHead className="w-1/12 text-right border border-black">
            تعداد
          </TableHead>
          <TableHead className="w-1/12 text-right border border-black">
            قیمت
          </TableHead>
          <TableHead className="w-1/12 text-right border border-black">
            امتیاز
          </TableHead>
          <TableHead className="w-2/12 text-right border border-black">
            زمان آپدیت
          </TableHead>
          <TableHead className="w-2/12 text-right border border-black">
            زمان ساخت
          </TableHead>
          <TableHead className="w-1/12 text-right border border-black">
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
        {products.map((product: product) => (
          <TableRow key={product.productId}>
            <TableCell className="border border-black text-center">
              {product.productId}
            </TableCell>
            <TableCell className="border border-black">
              {product.productName}
            </TableCell>
            <TableCell className="border border-black">
              {product.productQty}
            </TableCell>
            <TableCell className="border border-black">
              {product.productPrice}
            </TableCell>
            <TableCell className="border border-black">
              {product.productRating}
            </TableCell>
            <TableCell className="border border-black">
              {convertToJalali(product.updatedAt)}
            </TableCell>
            <TableCell className="border border-black">
              {convertToJalali(product.createdAt)}
            </TableCell>
            <TableCell className="border border-black">
              {product.productImageUrl ? (
                <Image
                  width={20}
                  height={20}
                  alt={"product image"}
                  src={product.productImageUrl}
                />
              ) : null}
            </TableCell>
            <TableCell className="border border-black flex justify-center">
              <EditProductDialog product={product} />
            </TableCell>
            <TableCell className="border border-black">
              <DeleteProductDialog product={product} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CategoryTable;
