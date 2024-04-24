"use client";
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
import { userDataStore } from "@/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
const ProfileForm = () => {
  const userData = useSelector(userDataStore);
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
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {}
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-6  flex flex-col"
      >
        <div className="flex gap-5 w-full">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام</FormLabel>
                  <FormControl>
                    <Input {...field} value={userData.firstName} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="lastName"
              className="w-full"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام خانوادگی</FormLabel>
                  <FormControl>
                    <Input {...field} value={userData.lastName} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>{" "}
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>آدرس</FormLabel>
              <FormControl>
                <Input {...field} value={userData.address} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full flex gap-5">
          <div className="w-full lg:w-1/3">
            {" "}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>رمز عبور</FormLabel>
                  <FormControl>
                    <Input {...field} value={userData.password} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full lg:w-1/3">
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>جنسیت</FormLabel>
                  <FormControl>
                    <Input {...field} value={userData.gender} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full lg:w-1/3">
            {" "}
            <FormField
              control={form.control}
              name="bio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تاریخ تولد</FormLabel>
                  <FormControl>
                    <Input {...field} value={userData.birthDate} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
      </form>
    </Form>
  );
};
export default ProfileForm;
