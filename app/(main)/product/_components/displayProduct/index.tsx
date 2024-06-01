"use client";
import { product } from "@/services/ProductService";
import ProductService from "@/services/ProductService";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const DisplayProduct = ({ productId }: { productId: number }) => {
  const [product, setProduct] = useState<product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await ProductService.getProducts({ productId });
        setProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    getProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col mt-10">
      <div className="flex">
        <div className="w-1/3 flex justify-center items-center">
          {" "}
          <Image
            width={250}
            height={250}
            src={product.productImageUrl}
            alt="product image"
            className=""
          />
        </div>

        <div className="w-3/4 flex flex-col gap-5 ml-2 justify-center px-4">
          <h1>{product.productName}</h1>
          <p className="text-justify">{product.productDescription}</p>
          <p>{product.productPrice}</p>
          <Button className="w-44">اضافه کردن به کارت</Button>
        </div>
      </div>
    </div>
  );
};

export default DisplayProduct;
