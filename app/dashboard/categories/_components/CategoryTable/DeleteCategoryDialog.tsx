import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import CategoryService, { Category } from "@/services/CategoryService";
const DeleteCategoryDialog = ({ category }: { category: Category }) => {
  const deleteCategory = async () => {
    const response = await CategoryService.deleteCategory(category.categoryId);
    console.log(response);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">حدف</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[300px]">
        <DialogHeader>
          <DialogDescription className="text-right">
            آیا مطمئن هسیتد ؟
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex justify-center">
          <div className="flex gap-5 w-full">
            <DialogClose asChild>
              <Button
                className="bg-green-600 text-white"
                onClick={() => deleteCategory()}
              >
                بله
              </Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="bg-red-600 text-white">خیر</Button>
            </DialogClose>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default DeleteCategoryDialog;
