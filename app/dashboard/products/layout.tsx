import React from "react";
import ProductDashboardHeader from "./_components/ProductHeader";

const ProductDashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="w-full h-min-screen">
      <ProductDashboardHeader />
      {children}
    </div>
  );
};

export default ProductDashboardLayout;
