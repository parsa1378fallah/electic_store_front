"use client";
import Image from "@/node_modules/next/image";
import SearchBar from "./searchbar";
import Link from "@/node_modules/next/link";
import Icons from "@/components/shared/icons/index";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import NavbarDashboard from "./NavbarDashboard";

const Navbar = () => {
  const dispatch = useDispatch();

  const isLoginedIn = useSelector((state: any) => state.login);

  return (
    <div className="w-full h-16">
      {" "}
      <div className="fixed top-0 right-0 w-full h-16 bg-gray-50 shadow-md px-16 z-50">
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
          <div>
            {!isLoginedIn ? (
              <div className="flex gap-3">
                {" "}
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
            ) : null}
            {isLoginedIn ? (
              <div className="flex gap-3">
                <NavbarDashboard />
                <Icons name="Store" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
