import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { product } from "@/services/ProductService";
import Link from "next/link";
import AddToCart from "@/components/shared/Buttons/AddToCart";
const ProductCard = ({ product }: { product: product }) => {
  return (
    <Card className=" max-w-60 w-full h-full  rounded-xl border width">
      <div className="flex flex-col gap-4 p-4">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
          <Link href={`/product/${product.productId}`}>
            {" "}
            <Image
              alt="Product image"
              className="aspect-[4/5] object-cover border w-full"
              height="180"
              width="120"
              src={
                product.productImageUrl
                  ? product.productImageUrl
                  : "/images/user.png"
              }
            />
          </Link>
        </div>
        <div className="grid gap-1.5">
          <h3 className="text-sm md:text-md">{product.productName}</h3>
          <p className="text-sm md:text-md text-green-400">
            {product.productPrice} تومان
          </p>
        </div>
        <AddToCart product={product} />
      </div>
    </Card>
  );
};
export default ProductCard;
