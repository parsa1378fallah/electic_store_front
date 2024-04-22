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
  firstName: z.string({ message: "نام خود را وارد کنید" }),
  lastName: z.string({ message: "نام خانوادگی خود را وارد کنید" }),
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
  repeatPassword: z.string().min(8, {
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
    const data = await AuthService.register(values);
    if (!data) return;
    router.push("/login");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام</FormLabel>
              <FormControl>
                <Input placeholder="مثال : علی" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>نام خانوادگی</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ایمیل</FormLabel>
              <FormControl>
                <Input {...field} />
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
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>تکرار رمز عبور</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
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
