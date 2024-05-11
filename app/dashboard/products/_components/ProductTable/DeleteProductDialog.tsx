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
import { deleteProductStore } from "@/redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductService, { product } from "@/services/ProductService";
const DeleteCategoryDialog = ({ product }: { product: product }) => {
  const dispatch = useDispatch();
  const deleteCategory = async () => {
    const response = await ProductService.deleteProduct(product.productId);
    dispatch(deleteProductStore(response.data));
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
