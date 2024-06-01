"use client";
import { useEffect } from "react";
import ShoppingCartService, {
  ShoppingCart,
} from "@/services/ShoppingCartService";
import {
  setShoppingCartsStore,
  shoppingCartsStore,
} from "@/redux/slices/shoppingCartSlice";
import { useSelector, useDispatch } from "react-redux";
import ShoppingCartCard from "../ShoppingCartCard";
const DisplayShoppingCart = () => {
  const dispatch = useDispatch();
  const shoppingCarts = useSelector(shoppingCartsStore);
  useEffect(() => {
    const getAllShoppingCarts = async () => {
      const response = await ShoppingCartService.getShoppingCarts();
      dispatch(setShoppingCartsStore(response.data));
    };
    getAllShoppingCarts();
  }, []);
  return (
    <div className="w-full flex flex-col gap-5">
      {shoppingCarts.map((shoppingCart: ShoppingCart) => (
        <div key={shoppingCart.shoppingCartId}>
          <ShoppingCartCard shoppingCart={shoppingCart} />
        </div>
      ))}
    </div>
  );
};
export default DisplayShoppingCart;
