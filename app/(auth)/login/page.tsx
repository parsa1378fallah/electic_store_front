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
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">پسورد</Label>
              <Input id="password" required type="password" />
            </div>
            <Button
              className="w-full bg-blue-500 text-lg hover:bg-blue-700 py-2 flex justify-center items-center"
              type="submit"
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
