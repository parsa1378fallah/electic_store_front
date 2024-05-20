"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icons from "@/components/shared/icons/index";

export default function Sidebar({ show = true }) {
  const router = useRouter();

  const className = "";

  const appendClass = show ? " ml-0" : " ml-[-250px] md:ml-0";

  const MenuItem = ({ icon, name, route }) => {
    const colorClass =
      router.pathname === route
        ? "text-black"
        : "text-black/50 hover:text-black";

    return (
      <Link
        href={route}
        className={`flex gap-1 [&>*]:my-auto text-md px-6 py-3 border-b-[1px] border-b-black/10 ${colorClass}`}
      >
        <div className="text-xl flex [&>*]:mx-auto w-[30px]">{icon}</div>
        <div>{name}</div>
      </Link>
    );
  };

  return (
    <div className="w-[250px]">
      <div
        className={`fixed top-16 right-0 bg-gray-100 w-[250px]  transition-[margin-left] ease-in-out duration-500   bottom-0  z-40${appendClass}`}
      >
        <div className="py-4 flex items-center justify-center">
          <Icons name="Store" />
        </div>
        <div className="flex flex-col">
          <MenuItem
            name="اطلاعات کاربری"
            route="/dashboard"
            icon={<Icons name="User" />}
          />
          <MenuItem
            name="کاربران"
            route="/dashboard/users"
            icon={<Icons name="User" />}
          />
          <MenuItem
            name="محصولات"
            route="/dashboard/products"
            icon={<Icons name="User" />}
          />{" "}
          <MenuItem
            name="سفارشات"
            route="/dashboard/orders"
            icon={<Icons name="User" />}
          />
          <MenuItem
            name="دسته بندی ها"
            route="/dashboard/categories"
            icon={<Icons name="User" />}
          />
        </div>
      </div>
    </div>
  );
}
