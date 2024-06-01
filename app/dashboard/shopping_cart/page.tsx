import ShoppingCartHeader from "./_components/ShoppingCartHrader";
import DisplayShoppingCart from "./_components/DisplayShoppingCarts";
const ShoppingCartPage = () => {
  return (
    <div className="w-full min-h-screen px-20">
      <ShoppingCartHeader />
      <DisplayShoppingCart />
    </div>
  );
};
export default ShoppingCartPage;
