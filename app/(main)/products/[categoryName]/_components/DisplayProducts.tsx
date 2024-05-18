"use client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductService, { product } from "@/services/ProductService";
import {
  productsStore,
  resetProductsStore,
  setProductsStore,
} from "@/redux/slices/productSlice";
import ProductCard from "./ProductCard";

const DisplayProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector(productsStore);
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  useEffect(() => {
    const getProductByCategory = async () => {
      if (categoryId) {
        try {
          const response = await ProductService.getProducts({
            categoryId: Number(categoryId),
          });
          dispatch(resetProductsStore());
          dispatch(setProductsStore(response.data));
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      }
    };
    getProductByCategory();
  }, []);

  return (
    <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  justify-center p-8">
      {products.map((product: product) => (
        <ProductCard product={product} key={product.productId} />
      ))}
    </div>
  );
};

export default DisplayProducts;
