"use client";
import AuthService from "@/services/AuthService";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStore } from "@/redux/slices/loginSlice";
import { setUserDataStore, userDataStore } from "@/redux/slices/userSlice";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  email: z
    .string({
      message: "لطفا ایمیل خود را وارد کنید",
    })
    .email({
      message: "وارد کردن ایمیل الزامی است",
    }),
  password: z.string().min(8, {
    message: "کلمه عبور باید حداقل 8 کارکتر باشد",
  }),
});

export default function LoginForm() {
  const router = useRouter();
  const dispatch = useDispatch();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const data = await AuthService.login(values);
    if (!data) return;
    dispatch(loginUserStore());
    console.log("data :", data);
    dispatch(setUserDataStore(data.data));
    router.push("/");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ایمیل</FormLabel>
              <FormControl>
                <Input placeholder="مثال : parsa@gmail.con" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>رمز عبور</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          ورود
        </Button>
      </form>
    </Form>
  );
}
