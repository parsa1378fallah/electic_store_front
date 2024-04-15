import Image from "@/node_modules/next/image";
const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-50 shadow-md px-16">
      <div className="flex justify-between items-center h-full">
        <Image src="/images/shop.jfif" width={50} height={50} />
      </div>
    </div>
  );
};
export default Navbar;
