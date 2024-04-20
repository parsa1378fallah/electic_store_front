"use client";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AuthService from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { showToast } from "@/utils/toast";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStore, isLogedIn } from "@/redux/slices/loginSlice";
const LoginPage = () => {
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const loginUser = async () => {
    const data = await AuthService.login({ email, password });
    if (!data) {
      showToast("success", <p>خطایی رخ داده ! بعدا دوباره تلاش کنید .</p>);
      return;
    }
    dispatch(loginUserStore());
    showToast("success", <p>کاربر عزیز شما با موفقیت وارد شدید</p>);
    router.push("/");
  };
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center bg-gray-100">
      {" "}
      <Card className="mx-auto w-[350px] sm:w-[450px] min-w-sm border-2 border-indigo-500">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            صفحه ورود
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={email}
                onChange={(e) => setEamil(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">پسورد</Label>
              <Input
                id="password"
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button
              className="w-full bg-blue-500 text-lg hover:bg-blue-700 py-2 flex justify-center items-center"
              type="submit"
              onClick={() => loginUser()}
            >
              ورود
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default LoginPage;
