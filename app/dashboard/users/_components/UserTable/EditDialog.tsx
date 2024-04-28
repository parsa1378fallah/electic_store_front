import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import Icons from "@/components/shared/icons/index";
import { useEffect, useState } from "react";
import UserService, { User } from "@/services/UserService";
const EditDialog = ({
  user,
  changeCurrentUserRoll,
}: {
  user: User;
  changeCurrentUserRoll: Function;
}) => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const FormSchema = z.object({
    level: z.string().min(1, { message: "یک گزینه را انتخاب کنید" }),
  });
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  async function updateUserRole(values: z.infer<typeof FormSchema>) {
    const data = await UserService.editUser(user.userId, values);
    changeCurrentUserRoll(user.userId, values.level);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Icons name="Edit" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="flex justify-center items-start">
          <DialogTitle>ویرایش کاربر</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <p>
            نام : {user.firstName} {user.lastName}
          </p>

          <p>ایمیل : {user.email}</p>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(updateUserRole)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
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
                      <SelectItem value="1">کاربر ادمین</SelectItem>
                      <SelectItem value="2">کاربر عادی</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button type="submit">به روز رسانی</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
export default EditDialog;
