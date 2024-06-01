"use client";
import { Button } from "@/components/ui/button";
import { product } from "@/services/ProductService";
import { userDataStore } from "@/redux/slices/userSlice";
import { useSelector } from "react-redux";
import ShoppingCartService from "@/services/ShoppingCartService";
const AddToCart = ({ product }: { product: product }) => {
  const userData = useSelector(userDataStore);
  const { productIsActive, productId, productPrice } = product;
  const { userId } = userData;
  const addShoppingCart = () => {
    const response = ShoppingCartService.addShoppingCart({
      productId,
      userId,
      status: productIsActive,
      price: productPrice,
      qty: 1,
    });
    console.log(response);
  };
  return (
    <Button className="w-44" onClick={() => addShoppingCart()}>
      اضافه کردن به کارت
    </Button>
  );
};
export default AddToCart;
