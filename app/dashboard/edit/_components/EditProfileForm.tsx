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
import { userDataStore, setUserDataStore } from "@/redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import Icons from "@/components/shared/icons/index";
import UserService from "@/services/UserService";
import { showToast } from "@/utils/toast";
const ProfileForm = () => {
  const userData = useSelector(userDataStore);
  const dispatch = useDispatch();
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
      birthDate: userData.birthDate || "",
      gender: userData.gender || "",
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    const editedUser = await UserService.editUser(userData.userId, values);
    dispatch(setUserDataStore(editedUser));
  }
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
                    <Input {...field} />
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
                    <Input {...field} />
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
                <Input {...field} />
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
                    <Input {...field} />
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
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "flex flex-row-reverse justify-end gap-3",
                            !field.value && ""
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span className="flex items-center flex-row-reverse gap-2">
                              انتخاب کنید
                              <Icons name="Calendar" />
                            </span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        initialFocus
                        captionLayout="dropdown-buttons"
                        fromYear={1990}
                        toYear={2024}
                      />
                    </PopoverContent>
                  </Popover>
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
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
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
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button type="submit" className="my-10 w-32">
          اعمال تغییرات
        </Button>
      </form>
    </Form>
  );
};
export default ProfileForm;
