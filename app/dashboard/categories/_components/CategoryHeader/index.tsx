"use client";
import AddDialog from "./AddCategoryDialog";
const CategoryDashboardHeader = () => {
  return (
    <div className="px-20 my-10">
      <div className="bg-gray-50 flex justify-between items-center p-4 rounded-lg">
        <p>دسته بندی ها</p>
        <AddDialog />
      </div>
    </div>
  );
};
export default CategoryDashboardHeader;
