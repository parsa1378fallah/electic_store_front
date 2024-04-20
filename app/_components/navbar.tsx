"use client";
import Image from "@/node_modules/next/image";
import SearchBar from "./searchbar";
import Link from "@/node_modules/next/link";
import Icons from "@/components/shared/icons/index";
import { Button } from "@/components/ui/button";
import { useSelector, useDispatch } from "react-redux";
import { logoutUserStore } from "@/redux/slices/loginSlice";
import { showToast } from "@/utils/toast";

const Navbar = () => {
  const dispatch = useDispatch();

  const isLoginedIn = useSelector((state: any) => state.login);
  const logoutUser = () => {
    dispatch(logoutUserStore());
    showToast("error", <p>کاربر عزیز خارج شدید .</p>);
  };
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
              {" "}
              <Link href="/login">
                <Button
                  className="text-white bg-red-500 hover:bg-red-600 rounded-full"
                  onClick={() => logoutUser()}
                >
                  خروج
                </Button>
              </Link>
              <div className="w-10 h-10 flex justify-center items-center border border-red-600 rounded-full overflow-hidden ">
                {" "}
                <Image
                  src="/images/user.png"
                  alt={"user picture"}
                  width={30}
                  height={30}
                />
              </div>
              <Icons name="Store" />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
