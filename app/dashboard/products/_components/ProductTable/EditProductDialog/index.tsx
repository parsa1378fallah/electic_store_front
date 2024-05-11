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
import EditCategoryDialogForm from "./EditProductDialogForm";
import { ScrollArea } from "@/components/ui/scroll-area";
import { product } from "@/services/ProductService";
const EditProductDialog = ({ product }: { product: product }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">ویرایش</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] p-0">
        <ScrollArea className=" max-h-screen w-full rounded-md border">
          <DialogHeader className="flex justify-center items-start px-10 py-5">
            <DialogTitle>ویرایش محصول</DialogTitle>
          </DialogHeader>
          <EditCategoryDialogForm product={product} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
export default EditProductDialog;
