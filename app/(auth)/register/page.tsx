import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

import RegisterForm from "./_components/RegisterForm";
const RegisterPage = () => {
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
          <RegisterForm />
        </CardContent>
      </Card>
    </div>
  );
};
export default RegisterPage;
