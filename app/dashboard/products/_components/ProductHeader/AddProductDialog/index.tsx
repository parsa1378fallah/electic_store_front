"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import AddCategoryDialogForm from "./AddProductDialogForm";
import { ScrollArea } from "@/components/ui/scroll-area";
const AddDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">اضافه کردن محصول</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] p-0">
        <ScrollArea className=" max-h-screen w-full rounded-md border">
          <DialogHeader className="flex justify-center items-start px-10 py-5">
            <DialogTitle>اضافه کردن محصول</DialogTitle>
          </DialogHeader>
          <AddCategoryDialogForm />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
export default AddDialog;
