import React from "react";
import { Button } from "@/components/ui/button";
import CategoryDashboardHeader from "./_components/CategoryHeader";

const CategoryDashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-min-screen">
      <CategoryDashboardHeader />
      {children}
    </div>
  );
};

export default CategoryDashboardLayout;
