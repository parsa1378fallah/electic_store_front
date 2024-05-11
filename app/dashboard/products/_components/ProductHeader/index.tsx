"use client";
import AddProductDialog from "./AddProductDialog/index";
const ProductDashboardHeader = () => {
  return (
    <div className="px-20 my-10">
      <div className="bg-gray-50 flex justify-between items-center p-4 rounded-lg">
        <p>محصولات</p>
        <AddProductDialog />
      </div>
    </div>
  );
};
export default ProductDashboardHeader;
