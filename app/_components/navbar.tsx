import Image from "@/node_modules/next/image";
import SearchBar from "./searchbar";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-50 shadow-md px-16">
      <div className="w-full h-full flex justify-between items-center">
        <Image
          src="/images/shop.jfif"
          width={50}
          height={50}
          alt={"shop icon"}
        />
        <SearchBar />
        <div className="flex gap-3">
          <Button className="text-white bg-green-500 rounded-full">
            ثبت نام
          </Button>
          <Button className="text-white bg-red-500 rounded-full">ورود</Button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
