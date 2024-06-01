import DisplayProduct from "../_components/displayProduct";
import ProductService from "@/services/ProductService";
const ProductPage = async ({ params }: { params: { productId: number } }) => {
  return (
    <div className="flex flex-col">
      <DisplayProduct productId={params.productId} />
    </div>
  );
};
export default ProductPage;
