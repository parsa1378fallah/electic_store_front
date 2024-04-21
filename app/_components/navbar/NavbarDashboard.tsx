"use client";
import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { logoutUserStore } from "@/redux/slices/loginSlice";
import { showToast } from "@/utils/toast";
import { useState } from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Icons from "@/components/shared/icons/index";
import Image from "@/node_modules/next/image";
import { userDataStore } from "@/redux/slices/userSlice";
type Checked = DropdownMenuCheckboxItemProps["checked"];

const NavbarDashboard = () => {
  const dispatch = useDispatch();
  const userData = useSelector(userDataStore);
  const [showPanel, setShowPanel] = useState<Checked>(false);

  const logoutUser = () => {
    dispatch(logoutUserStore());
    showToast("error", <p>کاربر عزیز خارج شدید .</p>);
  };
  return (
    <div className="flex gap-3">
      {" "}
      <div className="w-10 h-10 flex justify-center items-center border border-red-600 rounded-full overflow-hidden ">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            {/* <Icons name="User" /> */}
            <Button variant="outline">
              <Icons name="User" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>
              <div className="w-full flex gap-2">
                <div className="w-12 h-12 rounded-full flex justify-center items-center border border-red-500">
                  <Icons name="User" />
                </div>
                <div className="flex flex-col gap-1 justify-center">
                  <p>
                    {userData.firstName} {userData.lastName}
                  </p>
                  <p className="text-xs">{userData.email}</p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showPanel}
              onCheckedChange={setShowPanel}
            >
              داشبورد
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem onCheckedChange={() => logoutUser()}>
              <p>خروج</p>
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default NavbarDashboard;