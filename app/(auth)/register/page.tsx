"use client";
import { useState } from "react";

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AuthService from "@/services/AuthService";
import { useRouter } from "next/navigation";
const RegisterPage = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEamil] = useState("");
  const [password, setPassword] = useState("");
  const [userPasswordRepeat, setUserPasswordRepeat] = useState("");
  const router = useRouter();
  const registerUser = async () => {
    const data = await AuthService.register({
      firstName,
      lastName,
      email,
      password,
    });
    if (!data) return;
    router.push("/login");
  };

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center bg-gray-100 px-2">
      {" "}
      <Card className="mx-auto w-[350px] sm:w-[450px] min-w-sm border-2 border-indigo-500">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            صفحه ثبت نام
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text">نام</Label>
              <Input
                id="name"
                placeholder="مثال : علی"
                required
                type="text"
                value={firstName}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                  setfirstName(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">نام خانوادگی</Label>
              <Input
                id="lastName"
                placeholder="مثال : رمضانی"
                required
                type="text"
                value={lastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setlastName(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setEamil(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">پسورد</Label>
              <Input
                id="password"
                required
                type="password"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reapeatPassword">تکرار پسورد</Label>
              <Input
                id="reapeatPassword"
                required
                type="password"
                value={userPasswordRepeat}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUserPasswordRepeat(e.target.value);
                }}
              />
            </div>
            <Button
              className="w-full bg-blue-500 text-lg hover:bg-blue-700 py-2 flex justify-center items-center"
              type="submit"
              onClick={() => registerUser()}
            >
              ثبت نام
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
export default RegisterPage;
