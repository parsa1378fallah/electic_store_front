import { Button } from "@/components/ui/button";
import { ShoppingCart } from "@/services/ShoppingCartService";
import ShoppingCartService from "@/services/ShoppingCartService";
import { deleteShoppingCartStore } from "@/redux/slices/shoppingCartSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
const ShoppingCartCard = ({ shoppingCart }: { shoppingCart: ShoppingCart }) => {
  const dispatch = useDispatch();
  const deleteShoppingCard = async () => {
    const response = await ShoppingCartService.deleteShoppingCart(
      shoppingCart.shoppingCartId
    );
    console.log("dferfergf", response);
    dispatch(deleteShoppingCartStore(shoppingCart.shoppingCartId));
  };
  return (
    <div className="w-full flex bg-gray-100 rounded-3xl p-5">
      <div className="w-1/4 flex justify-center items-center">
        <Image
          width={100}
          height={100}
          src={shoppingCart.product.productImageUrl}
          alt="shopping cart image"
        />
      </div>
      <div className="w-2/3 flex flex-col gap-5">
        <p>{shoppingCart.product.productName}</p>
        <p>
          <span>قیمت : </span>
          <span>{shoppingCart.product.productPrice}</span>
        </p>
        <p>
          <span>تعداد : </span>
          <span>{shoppingCart.qty}</span>
        </p>
        <p>
          <span>قیمت کل : </span>
          <span>{shoppingCart.product.productPrice * shoppingCart.qty}</span>
        </p>
        <Button onClick={() => deleteShoppingCard()}>حذف</Button>
      </div>
    </div>
  );
};
export default ShoppingCartCard;
