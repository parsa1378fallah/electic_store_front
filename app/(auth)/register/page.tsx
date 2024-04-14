"use client";
import { useState } from "react";
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

const RegisterPage = () => {
  const [userName, setUserName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEamil] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordRepeat, setUserPasswordRepeat] = useState("");

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
              {userName}
              <Input
                id="name"
                placeholder="مثال : علی"
                required
                type="text"
                value={userName}
                onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                  setUserName(e.target.value);
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
                value={userLastName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUserLastName(e.target.value);
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
                value={userEmail}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUserEamil(e.target.value);
                }}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">پسورد</Label>
              <Input
                id="password"
                required
                type="password"
                value={userPassword}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setUserPassword(e.target.value);
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
