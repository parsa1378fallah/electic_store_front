"use client";
import Image from "@/node_modules/next/image";
import SearchBar from "./searchbar";
import Link from "@/node_modules/next/link";
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return (
    <div className="w-full h-16 bg-gray-50 shadow-md px-16">
      <div className="w-full h-full flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/shop.jfif"
            width={50}
            height={50}
            alt={"shop icon"}
          />
        </Link>

        <SearchBar />
        <div className="flex gap-3">
          <Link href="/register">
            {" "}
            <Button className="text-white bg-green-500 hover:bg-green-600 rounded-full">
              ثبت نام
            </Button>
          </Link>
          <Link href="/login">
            <Button className="text-white bg-red-500 hover:bg-red-600 rounded-full">
              ورود
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
