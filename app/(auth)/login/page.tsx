import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

import LoginForm from "./_components/LoginForm";
const LoginPage = () => {
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
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
};
export default LoginPage;
