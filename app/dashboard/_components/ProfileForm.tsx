"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { userDataStore } from "@/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
const ProfileForm = () => {
  const userData = useSelector(userDataStore);
  const FormSchema = z.object({
    firstName: z.string({ message: "نام کاربر نباید خالی باشد" }),
    lastName: z.string({ message: "نام خانوادگی نباید خالی باشد" }),
    address: z.string(),
    password: z.string().min(8, {
      message: "کلمه عبور باید حداقل 8 کارکتر باشد",
    }),
    birthDate: z.date(),
    gender: z.string(),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      address: userData.address || "",
      password: userData.password || "",
      birthDate: () =>
        userData.bithDate ? format(userData.birthDate, "PPP") : "",
      gender: userData.gender || "",
    },
  });

  return (
    <Form {...form}>
      <form className="w-full space-y-6  flex flex-col">
        <div className="flex gap-5 w-full">
          <div className="w-1/2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>نام</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
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
                    <Input {...field} disabled />
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
                <Input {...field} disabled />
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
                    <Input {...field} disabled />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="w-full lg:w-1/3">
            <FormField
              control={form.control}
              name="birthDate"
              render={({ field }) => (
                <FormItem className="flex flex-col translate-y-2.5">
                  <FormLabel>تاریخ تولد</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <div className="w-full lg:w-1/3">
            {" "}
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>جنسیت</FormLabel>
                  <FormControl>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        disabled
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="انتخاب کنید" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="male">مرد</SelectItem>
                          <SelectItem value="female">زن</SelectItem>
                          <SelectItem value="other">فرقی نمیکند</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
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
